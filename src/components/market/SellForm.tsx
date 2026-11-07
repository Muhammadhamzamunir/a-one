import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, CheckCircle2, Loader2, MessageCircle, Trash2 } from "lucide-react";
import { useSubmitContactMutation } from "@/features/api/apiSlice";
import { SITE } from "@/constants/site";
import { CATEGORIES, type CategoryId, type Condition } from "@/data/listings";

const CONDITIONS: Condition[] = ["Like new", "Good", "Fair", "For repair"];
const MAX_PHOTOS = 4;

const field =
  "focus-ring mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] text-brand-navy placeholder:text-slate-400";

type Errors = Partial<Record<"name" | "phone" | "item" | "details", string>>;

/** "Sell your item" form. Photos are previewed locally; connect the Spring API to upload them. */
export function SellForm() {
  const [submit, state] = useSubmitContactMutation();
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const previews = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files]);
  useEffect(() => () => previews.forEach((url) => URL.revokeObjectURL(url)), [previews]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your name";
    if (get("phone").replace(/\D/g, "").length < 7) next.phone = "Enter a valid phone number";
    if (get("item").length < 3) next.item = "Tell us what you are selling";
    if (get("details").length < 10) next.details = "Add a few details (at least 10 characters)";
    setErrors(next);
    if (Object.keys(next).length) return;

    const category = CATEGORIES.find((c) => c.id === (get("category") as CategoryId))?.label ?? "Other";
    await submit({
      name: get("name"),
      phone: get("phone"),
      email: "",
      service: `Sell item: ${category}`,
      propertyType: get("area"),
      message: [
        `Item: ${get("item")}`,
        `Category: ${category}`,
        `Condition: ${get("condition")}`,
        `Area: ${get("area") || "Not given"}`,
        `Photos selected: ${files.length}`,
        `Details: ${get("details")}`,
      ].join("\n"),
    }).unwrap();
  };

  if (state.isSuccess) {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 14 }}
          className="inline-block"
        >
          <CheckCircle2 className="mx-auto text-emerald-600" size={44} />
        </motion.span>
        <h3 className="mt-4 text-xl font-extrabold text-brand-navy">Request received</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The team will review your item and call you with the next step. You can also send photos
          straight away on WhatsApp.
        </p>
        <a
          href={`${SITE.whatsappHref}?text=${encodeURIComponent("Hello A-One, I just submitted an item to sell. Sending photos here.")}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-5 inline-flex min-h-12 items-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700"
        >
          <MessageCircle aria-hidden="true" size={18} /> Send photos on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-brand-navy">
          Your name
          <input name="name" autoComplete="name" className={field} placeholder="Full name" aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-1 block text-xs font-medium text-brand-red">{errors.name}</span>}
        </label>
        <label className="block text-sm font-bold text-brand-navy">
          Phone / WhatsApp
          <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="03xx xxxxxxx" aria-invalid={!!errors.phone} />
          {errors.phone && <span className="mt-1 block text-xs font-medium text-brand-red">{errors.phone}</span>}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-brand-navy">
          Category
          <select name="category" className={field} defaultValue="cooling">
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-bold text-brand-navy">
          Condition
          <select name="condition" className={field} defaultValue="Good">
            {CONDITIONS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-brand-navy">
          Item (brand &amp; model)
          <input name="item" className={field} placeholder="e.g. 1.5 ton split AC" aria-invalid={!!errors.item} />
          {errors.item && <span className="mt-1 block text-xs font-medium text-brand-red">{errors.item}</span>}
        </label>
        <label className="block text-sm font-bold text-brand-navy">
          Your area
          <input name="area" className={field} placeholder="e.g. Mozang, Lahore" />
        </label>
      </div>

      <label className="block text-sm font-bold text-brand-navy">
        Details
        <textarea
          name="details"
          rows={4}
          className={`${field} py-3`}
          placeholder="Age, working condition, accessories, reason for selling…"
          aria-invalid={!!errors.details}
        />
        {errors.details && <span className="mt-1 block text-xs font-medium text-brand-red">{errors.details}</span>}
      </label>

      <div>
        <p className="text-sm font-bold text-brand-navy">Photos (up to {MAX_PHOTOS})</p>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <AnimatePresence>
            {previews.map((src, index) => (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200"
              >
                <img src={src} alt={`Selected photo ${index + 1}`} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => setFiles((list) => list.filter((_, i) => i !== index))}
                  aria-label={`Remove photo ${index + 1}`}
                  className="focus-ring absolute right-1.5 top-1.5 grid size-8 place-items-center rounded-full bg-brand-navy/80 text-white opacity-90 transition hover:bg-brand-red"
                >
                  <Trash2 aria-hidden="true" size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
          {files.length < MAX_PHOTOS && (
            <label className="focus-within:ring-brand-cyan grid aspect-square cursor-pointer place-items-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-center text-xs font-bold text-slate-500 transition hover:border-brand-blue hover:bg-blue-50 hover:text-brand-blue focus-within:ring-2">
              <span>
                <Camera aria-hidden="true" className="mx-auto mb-1" size={22} />
                Add photo
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(event) => {
                  const picked = Array.from(event.target.files ?? []);
                  setFiles((list) => [...list, ...picked].slice(0, MAX_PHOTOS));
                  event.target.value = "";
                }}
              />
            </label>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={state.isLoading}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-[#b9141a] disabled:opacity-70 sm:w-auto"
      >
        {state.isLoading ? <Loader2 className="animate-spin" size={18} /> : null}
        {state.isLoading ? "Sending…" : "Submit for review"}
      </button>
      <p className="text-xs leading-5 text-slate-500">
        We call you back with an offer. Nothing is listed publicly until you agree.
      </p>
    </form>
  );
}
