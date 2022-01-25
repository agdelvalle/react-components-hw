// import context and custom hook
import { Fieldcontext } from "./fieldcontext";
import { useId } from "hooks/use-id";

export const Field = ({fieldId, children}) => {
    const ensuredId = useId(fieldId);

    return(
        <Fieldcontext.Provider value={ensuredId}>
            <div className="space-y-1">{ children }</div>
        </Fieldcontext.Provider>
    )
}