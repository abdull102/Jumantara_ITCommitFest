import Chevron from "../../public/icons/Chevron";
import Whatsapp from "../../public/icons/Whatsapp";
import ApkFile from "../../public/icons/ApkFile";
import Message from "../../public/icons/Message";
import Phishing from "../../public/icons/Phising";

export default function SimulationButton({ onSelectScenario }) {
  const iconButton = {
    "wa-invite": Whatsapp,
    "wa-apk": ApkFile,
    "email-phishing": Phishing,
    "sms-prize": Message,
  };

  // mapping tipe → warna ikon
  const iconColor = {
    "wa-invite": "text-green-500",
    "wa-apk": "text-emerald-500",
    "email-phishing": "text-pink-500",
    "sms-prize": "text-blue-500",
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        simulationType="wa-invite"
        title="Pesan Whatsapp Undangan"
        Icon={iconButton["wa-invite"]}
        color={iconColor["wa-invite"]}
        onSelectScenario={onSelectScenario}
      />
      <Button
        simulationType="wa-apk"
        title="Pesan Whatsapp File APK"
        Icon={iconButton["wa-apk"]}
        color={iconColor["wa-apk"]}
        onSelectScenario={onSelectScenario}
      />
      <Button
        simulationType="email-phishing"
        title="Email Phising"
        Icon={iconButton["email-phishing"]}
        color={iconColor["email-phishing"]}
        onSelectScenario={onSelectScenario}
      />
      <Button
        simulationType="sms-prize"
        title="SMS Berhadiah"
        Icon={iconButton["sms-prize"]}
        color={iconColor["sms-prize"]}
        onSelectScenario={onSelectScenario}
      />
    </div>
  );

  function Button({ simulationType, title, Icon, color, onSelectScenario }) {
    return (
      <button
        onClick={() => onSelectScenario(simulationType)}
        className="flex justify-between items-center hover:bg-zinc-800 p-6 rounded-lg"
      >
        <div className="flex items-center gap-3">
          {Icon ? <Icon className={`h-8 ${color}`} /> : null}
          <h2 className="font-medium lg:text-lg 2xl:text-xl">{title}</h2>
        </div>
        <Chevron className="h-5 text-zinc-500" />
      </button>
    );
  }
}
