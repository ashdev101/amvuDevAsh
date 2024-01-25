import CircularProgressProfileImage from './CircularProgressProfileImage'
import FormForEmergency from './FormForEmergency'
import EmergencyContact from './EmergencyContact'
import UserGeneralDetails from './UserGeneralDetails'

type Props = {}


/**
 * Render the right panel of the UI.
 *
 * @returns The JSX element representing the right panel.
 */
function RightPanel({ }: Props): JSX.Element {
  return (
    <section className="px-3 lg:px-0 w-full mr-4 pt-6">
      <div className="items-center shadow-lg flex flex-col py-2 sm:py-4 md:py-6 px-16 rounded-2xl bg-gradient-to-r from-[#FF0000] to-[#ED7B72] max-md:px-5">
        {/* Ambuvians Healthcare */}
        <span className="flex flex-col items-stretch max-md:max-w-full">
          <div className="justify-center text-orange-50 text-4xl font-bold leading-[49.8px] tracking-[7px] max-md:max-w-full">
            <span className="text-black">Ambuvians </span>
            <span className="text-orange-50">Healthcare</span>
          </div>
          {/* Personal Details */}
          <div className="justify-center text-white text-3xl font-light leading-8 tracking-[7px] self-center mt-6">
            PERSONAL DETAILS
          </div>
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-4 gap-2 xl:gap-6">
        {/* User General Details */}
        <section className="flex-[4] flex bg-white p-3 rounded-2xl">
          <UserGeneralDetails />
        </section>

        <section className="flex-[3] flex flex-col items-center gap-10 pt-20">
          <div className="hidden bg-white w-full max-w-[400px] pt-5 pb-2 rounded-2xl md:flex flex-col items-center">
            {/* Circular Progress Profile Image */}
            <CircularProgressProfileImage />
            <div>
              <p className="text-md font-bold text-[#6B7A99]">Ambuvians</p>
              <p className="text-md font-bold text-[#ADB8CC]">AMBU123123</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <img src="blood.png" alt="blood" className="w-[35px] h-[35px] object-contain" />
              <span className="font-bold text-sm text-[ #ADB8CC]">O+ve</span>
            </div>
          </div>

          <div className="bg-white w-full px-4 py-2 rounded-2xl">
            {/* Emergency Contacts */}
            <span className="text-sm font-bold">Emergency Contacts</span>
            <EmergencyContact />
          </div>
        </section>

        <section className="flex-[3] flex flex-col items-center bg-white px-4 py-2 rounded-2xl">
          {/* Emergency Booking */}
          <span className="text-sm font-bold">Emergency Booking</span>
          <FormForEmergency />
          <button className="mt-16 bg-gradient-to-r from-[#FF0000] to-[#ED7B72] flex flex-row items-center justify-center gap-2 px-3 py-1 rounded-lg">
            <img src="ambulance.png" alt="" className="w-[20px] h-[20px]" />
            <span className="text-sm font-bold text-[#ADB8CC]">Emergency Booking <br /> (College)</span>
          </button>
        </section>
      </div>
    </section>
  );
}

export default RightPanel