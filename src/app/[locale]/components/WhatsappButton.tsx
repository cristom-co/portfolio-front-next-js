import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function WhatsappButton() {

    const t = useTranslations('whatsappButton');

    return (
        <a
            href="https://wa.me/573015567050"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition-transform z-50"
        >
            <Image
                src="/icons/220236.png"
                alt="WhatsApp"
                width={30}
                height={30}
            />
            <span className="font-medium">{t("action")}</span>
        </a>
    );
}