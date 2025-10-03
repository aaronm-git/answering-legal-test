"use client";

import {
  submitContactForm,
  type ContactFormState
} from "@/lib/actions/contact";
import cn from "@/lib/utils/cn";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Button from "./ui/Button";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, {});
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    cellPhone: ""
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Form submitted successfully!");
      formRef.current?.reset();
      setFormValues({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        cellPhone: ""
      });
    } else if (state.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className='bg-navy-blue py-8 lg:py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-8 md:grid-cols-2 md:gap-16'>
          {/* Left Content */}
          <div className='text-white'>
            <h2 className='h1 mb-8'>
              24/7 coverage at a fraction of the cost of in-house receptionists.
            </h2>
            <p className='subtitle1'>
              Don't believe us? Fill out the form on the right, and we'll take
              you to our pricing page, where you can find out just how little
              24/7 legal intake will cost you.
            </p>
          </div>

          {/* Right Form */}
          <div className='rounded-3xl bg-white p-8 shadow-xl md:p-10'>
            <h3 className='mb-4 text-2xl font-bold text-[#1B2951] md:text-3xl'>
              Tell us about yourself. We'll show you all of our pricing
              information on the next page.
            </h3>

            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className='mb-6'>
                <p className='form-error-message'>
                  Please fill in a valid value for all required fields
                </p>
                <p className='form-error-message'>
                  Fields:{" "}
                  <span className='font-bold'>
                    {[
                      state.errors.firstName && "Name",
                      state.errors.companyName && "Company Name",
                      state.errors.email && "Email",
                      state.errors.cellPhone && "Phone"
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </p>
              </div>
            )}

            <form ref={formRef} action={formAction} className='space-y-6'>
              {/* First Name */}
              <div>
                <label htmlFor='firstName' className='form-label'>
                  First Name*
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  placeholder='First Name*'
                  className={cn(
                    "form-input",
                    state.errors?.firstName
                      ? "form-input-error"
                      : "form-input-default"
                  )}
                  aria-invalid={state.errors?.firstName ? "true" : "false"}
                  aria-describedby={
                    state.errors?.firstName ? "firstName-error" : undefined
                  }
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor='lastName' className='form-label'>
                  Last Name*
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  placeholder='Last Name*'
                  className={cn(
                    "form-input",
                    state.errors?.lastName
                      ? "form-input-error"
                      : "form-input-default"
                  )}
                  aria-invalid={state.errors?.lastName ? "true" : "false"}
                  aria-describedby={
                    state.errors?.lastName ? "lastName-error" : undefined
                  }
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor='companyName' className='form-label'>
                  Company Name*
                </label>
                <input
                  type='text'
                  id='companyName'
                  name='companyName'
                  value={formValues.companyName}
                  onChange={handleInputChange}
                  placeholder='Company Name*'
                  className={cn(
                    "form-input",
                    state.errors?.companyName
                      ? "form-input-error"
                      : "form-input-default"
                  )}
                  aria-invalid={state.errors?.companyName ? "true" : "false"}
                  aria-describedby={
                    state.errors?.companyName ? "companyName-error" : undefined
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='form-label'>
                  Email*
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder='Email*'
                  className={cn(
                    "form-input",
                    state.errors?.email
                      ? "form-input-error"
                      : "form-input-default"
                  )}
                  aria-invalid={state.errors?.email ? "true" : "false"}
                  aria-describedby={
                    state.errors?.email ? "email-error" : undefined
                  }
                />
              </div>

              {/* Cell Phone */}
              <div>
                <label htmlFor='cellPhone' className='form-label'>
                  Cell Phone*
                </label>
                <input
                  type='tel'
                  id='cellPhone'
                  name='cellPhone'
                  value={formValues.cellPhone}
                  onChange={handleInputChange}
                  placeholder='Cell Phone*'
                  className={cn(
                    "form-input",
                    state.errors?.cellPhone
                      ? "form-input-error"
                      : "form-input-default"
                  )}
                  aria-invalid={state.errors?.cellPhone ? "true" : "false"}
                  aria-describedby={
                    state.errors?.cellPhone ? "cellPhone-error" : undefined
                  }
                />
              </div>

              {/* Submit Button */}
              <div className='flex justify-center'>
                <Button variant='primary' type='submit' disabled={isPending}>
                  {isPending ? "Submitting..." : "See plans & pricing"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
