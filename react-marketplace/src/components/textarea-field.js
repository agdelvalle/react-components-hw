import * as React from "react";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { useId } from "hooks/use-id";

export const TextareaField = React.forwardRef(
    function TextareaField({label, id, ...textareaProps}, ref) {
        const txtId = useId(id);

        return(
            <div className="space-y-1">
            {label && <Label htmlFor={txtId}>{label}</Label>}
            <Textarea {...textareaProps} id={txtId} ref={ref} />
          </div>
        )
})