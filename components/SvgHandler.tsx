export default function HistoryIcon({ height, width, fill }: iconSetting) {
  return (
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      height = { height ? height : "48" }
      viewBox = "0 -960 960 960"
      width = { width ? width : "48" }
      fill = { fill? fill : "#858585" }
    >
      <path d="M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z" />
    </svg>
  );
}

export function HelpIcon ({ height, width, fill }:iconSetting) {
  return (
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      height = { height ? height : "48" }
      viewBox = "0 -960 960 960"
      width = { width ? width : "48" }
      fill = { fill? fill : "#858585" }
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M484-247q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-35-146h59q0-26 6.5-47.5T555-490q31-26 44-51t13-55q0-53-34.5-85T486-713q-49 0-86.5 24.5T345-621l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508-512q-30 26-44.5 51.5T449-393Zm31 313q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>  
    </svg>
  );
}

export function QrCodeScannerIcon ({ height, width, fill }:iconSetting) {
  return (
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      height = { height ? height : "48" }
      viewBox = "0 -960 960 960"
      width = { width ? width : "48" }
      fill = { fill? fill : "#858585" }
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M80-707v-173h173v60H140v113H80Zm0 627v-173h60v113h113v60H80Zm627 0v-60h113v-113h60v173H707Zm113-627v-113H707v-60h173v173h-60ZM708-251h63v63h-63v-63Zm0-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm126-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm252-332v252H519v-252h252ZM440-440v252H188v-252h252Zm0-332v252H188v-252h252Zm-50 534v-152H238v152h152Zm0-332v-152H238v152h152Zm331 0v-152H569v152h152Z"/>
    </svg>
  );
}