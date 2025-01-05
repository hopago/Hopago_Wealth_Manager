import { SupportForm } from "@/features/(marketing)/support/form/form"

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-custom-black text-custom-white w-full p-14 pt-[160px] -mb-1">
            <div className="flex justify-between gap-14">
                <SupportForm />
                <section className="flex flex-[2_5] flex-col gap-3 text-balance">
                    <span className="text-sm font-bold text-[#D8B4FE] tracking-wide">
                        CONTACT
                    </span>
                    <h3 className="text-4xl font-bold text-custom-white leading-snug">
                        언제든지 연락해주세요
                    </h3>
                    <p className="text-lg text-custom-gray leading-relaxed">
                        문의 사항이나 문제가 있다면 언제든 말씀해주세요.
                        <br />
                        빠르고 정확한 답변으로 도와드리겠습니다.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default ContactPage