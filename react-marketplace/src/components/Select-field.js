import * as React from "react";
import { Select } from "./select";
import { Label } from "./label";
import { Field } from "./field";
// import { useId } from "hooks/use-id";

export const SelectField = React.forwardRef(function SelectField(
  { label, id, ...selectProps },
  ref
) {
  // const selectId = useId(id);

  return (
    // <div className="space-y-1">
    //   {label && <Label htmlFor={selectId}>{label}</Label>}
    //   <Select {...selectProps} id={selectId} ref={ref} />
    // </div>

    <Field fieldId={id}>
       {label && <Label>{label}</Label>}
       <Select {...selectProps} ref={ref} />
    </Field>
  );
});

SelectField.propTypes = {
  label: PropTypes.node,
};