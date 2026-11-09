import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/content";
import { sendEnquiryEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Enter a valid email").or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Please add at least 10 characters"),
});
type Values = z.infer<typeof schema>;

export function EnquiryForm({
  mode = "quote",
  defaultService = "",
}: {
  mode?: "quote" | "contact" | "equipment";
  defaultService?: string;
}) {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService, email: "", message: "" },
  });
  const submit = async (values: Values) => {
    setSubmitError(null);
    setIsSending(true);
    try {
      await sendEnquiryEmail(values);
      reset();
      setIsSending(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSending(false);
      setSubmitError(
        err instanceof Error ? err.message : "Failed to send enquiry. Please retry.",
      );
    }
  };
  const input =
    "focus-ring mt-2 min-h-12 leading-12 w-full rounded-md border border-slate-300 bg-white px-4 text-brand-navy placeholder:text-slate-400";
  const selectClass = input + " appearance-none bg-white";
  if (isSuccess)
    return (
      <div
        role="status"
        className="rounded-lg border border-green-200 bg-green-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-green-600" size={38} />
        <h3 className="mt-4 text-xl font-extrabold text-brand-navy">
           Enquiry Submitted 
        </h3>
        {/* <p className="mt-2 text-sm leading-6 text-slate-600">
          This frontend is API-ready. Connect the RTK Query endpoint to Spring
          Boot before launch.
        </p> */}
        <button
          className="focus-ring mt-5 font-bold text-brand-red"
          onClick={() => {
            reset();
            setIsSuccess(false);
          }}
        >
          Send another
        </button>
      </div>
    );
  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className={input} autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message}>
          <input
            className={input}
            autoComplete="tel"
            inputMode="tel"
            {...register("phone")}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email (optional)" error={errors.email?.message}>
          <input
            className={input}
            autoComplete="email"
            type="email"
            {...register("email")}
          />
        </Field>
        <Field label="Service" error={errors.service?.message}>
          <select className={selectClass} {...register("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortTitle}
              </option>
            ))}
            <option value="used-equipment">Used Equipment</option>
            <option value="other">Other / Not sure</option>
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Property / industry">
          <select className={selectClass} {...register("propertyType")}>
            <option value="">Select type</option>
            <option>Residential</option>
            <option>Office / IT</option>
            <option>Commercial / Retail</option>
            <option>Industrial</option>
            <option>Hospital / Healthcare</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Preferred date">
          <input className={input + " appearance-none bg-white"} type="date" {...register("preferredDate")} />
        </Field>
        <Field label="Preferred time">
          <select className={selectClass} {...register("preferredTime")}>
            <option value="">Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </Field>
      </div>
      <Field label="Tell us what you need" error={errors.message?.message}>
        <textarea
          className={`${input} min-h-32 py-3`}
          placeholder="Equipment, issue, location and any access details…"
          {...register("message")}
        />
      </Field>
      {submitError && (
        <p role="alert" className="rounded bg-red-50 p-3 text-sm font-bold text-red-700">
          {submitError}
        </p>
      )}
      <button
        disabled={isSending}
        className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-extrabold text-white transition-colors hover:bg-[#103b7c] disabled:opacity-60"
      >
        {isSending ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Submitting…
          </>
        ) : (
          "Submit enquiry"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="text-sm font-bold text-brand-navy">
      {label}
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-xs text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
