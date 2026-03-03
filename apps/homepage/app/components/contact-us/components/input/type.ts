export type InputType =
    | "first-name"
    | "last-name"
    | "email"
    | "phone-number"
    | "message";

// prettier-ignore

export function getInputLabel(inputType: InputType) {
    switch (inputType) {
        case "first-name":   return "Vorname";
        case "last-name":    return "Nachname";
        case "email":        return "E-Mail";
        case "phone-number": return "Nummer";
        case "message":      return "Nachricht";
    }
}
