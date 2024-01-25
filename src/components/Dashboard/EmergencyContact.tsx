
import Input from './Input'

type Props = {}

/**
 * Renders the emergency contact form.
 * @param {Props} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
function EmergencyContact({ }: Props): JSX.Element {
    return (
        // Render the form
        <form className="w-full max-h-max flex flex-col items-center gap-3">
            {/* Render the first section */}
            <section className="w-full max-h-max flex flex-col items-center gap-2">
                {/* Render the input fields */}
                <Input placeholder={"Name"} type="text" name={""} isDisabled />
                <Input placeholder={"Phone No"} type="phone" name={""} isDisabled />
                <Input placeholder={"Designation"} type="text" name={""} isDisabled />
            </section>
            {/* Render the second section */}
            <section className="w-full max-h-max flex flex-col items-center gap-2">
                {/* Render the input fields */}
                <Input placeholder={"Name"} type="text" name={""} isDisabled />
                <Input placeholder={"Phone No"} type="phone" name={""} isDisabled />
                <Input placeholder={"Designation"} type="text" name={""} isDisabled />
            </section>
        </form>
    )
}

export default EmergencyContact