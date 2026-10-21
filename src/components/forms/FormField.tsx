import React from "react";
import { AlertCircle } from "lucide-react";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, helperText, required, leftIcon, className = "", id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]"
        >
          {label}
          {required ? (
            <span className="text-[#d4af37] ml-1" title="Required">*</span>
          ) : (
            <span className="text-[#71717a] ml-1.5 normal-case font-normal">(Optional)</span>
          )}
        </label>

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#71717a]">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`w-full rounded-xl bg-[#14141c] border text-white text-sm placeholder-[#52525b] transition-all duration-200 py-3 ${
              leftIcon ? "pl-10 pr-4" : "px-4"
            } ${
              error
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-[#272735] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            } focus:outline-none ${className}`}
            {...props}
          />
        </div>

        {error && (
          <p id={`${inputId}-error`} className="flex items-center gap-1.5 text-xs text-rose-400 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p className="text-xs text-[#71717a] mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);
InputField.displayName = "InputField";

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  maxLength?: number;
  currentLength?: number;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      maxLength,
      currentLength = 0,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <div className="flex items-center justify-between">
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]"
          >
            {label}
            {required ? (
              <span className="text-[#d4af37] ml-1" title="Required">*</span>
            ) : (
              <span className="text-[#71717a] ml-1.5 normal-case font-normal">(Optional)</span>
            )}
          </label>
          {maxLength && (
            <span
              className={`text-xs ${
                currentLength > maxLength * 0.9 ? "text-amber-400" : "text-[#71717a]"
              }`}
            >
              {currentLength} / {maxLength}
            </span>
          )}
        </div>

        <textarea
          id={inputId}
          ref={ref}
          maxLength={maxLength}
          rows={props.rows || 4}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-xl bg-[#14141c] border text-white text-sm placeholder-[#52525b] transition-all duration-200 px-4 py-3 ${
            error
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              : "border-[#272735] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
          } focus:outline-none resize-y ${className}`}
          {...props}
        />

        {error && (
          <p id={`${inputId}-error`} className="flex items-center gap-1.5 text-xs text-rose-400 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p className="text-xs text-[#71717a] mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);
TextareaField.displayName = "TextareaField";

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, helperText, required, options, className = "", id, ...props }, ref) => {
    const inputId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]"
        >
          {label}
          {required ? (
            <span className="text-[#d4af37] ml-1" title="Required">*</span>
          ) : (
            <span className="text-[#71717a] ml-1.5 normal-case font-normal">(Optional)</span>
          )}
        </label>

        <select
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-xl bg-[#14141c] border text-white text-sm transition-all duration-200 px-4 py-3 appearance-none cursor-pointer ${
            error
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              : "border-[#272735] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
          } focus:outline-none ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#14141c] text-white py-1">
              {opt.label}
            </option>
          ))}
        </select>

        {error && (
          <p id={`${inputId}-error`} className="flex items-center gap-1.5 text-xs text-rose-400 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p className="text-xs text-[#71717a] mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);
SelectField.displayName = "SelectField";

export interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
  required?: boolean;
}

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const defaultId = React.useId();
    const inputId = id || defaultId;

    return (
      <div className="w-full text-left space-y-1">
        <label htmlFor={inputId} className="flex items-start gap-3 cursor-pointer select-none">
          <input
            id={inputId}
            type="checkbox"
            ref={ref}
            className={`mt-1 h-4 w-4 rounded border-[#38384a] bg-[#14141c] text-[#d4af37] focus:ring-[#d4af37] focus:ring-offset-0 transition-colors cursor-pointer ${className}`}
            {...props}
          />
          <span className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
            {label}
          </span>
        </label>
        {error && (
          <p className="flex items-center gap-1.5 text-xs text-rose-400 pl-7">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);
CheckboxField.displayName = "CheckboxField";
