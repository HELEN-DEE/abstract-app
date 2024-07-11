import firstIcon from "../assets/icon-1.png"
import secondIcon from "../assets/icon-2.png"
import thirdIcon from "../assets/icon-3.png"
import fourthIcon from "../assets/icon-4.png"
import fifthIcon from "../assets/icon-5.png"
import sixthIcon from "../assets/icon-6.png"

const featureCard = [
    {
        img: firstIcon,
        mainText: "Using Abstract",
        subText: "Abstract lets you manage, version, and document your designs in one place.",
        label: "learn more"
    },
    {
        img: secondIcon,
        mainText: "Manage your account",
        subText: "Configure your account settings, such as your email, profile details, and password.",
        label: "learn more"
    },
    {
        img: thirdIcon,
        mainText: "Manage organizations, teams, and projects",
        subText: "Use Abstract organizations, teams, and projects to organize your people and your work.",
        path: "/"
    },
    {
        img: fourthIcon,
        mainText: "Manage billing",
        subText: "Change subscriptions and payment details.",
        path: "/"
    },
    {
        img: fifthIcon,
        mainText: "Authenticate to Abstract",
        subText: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
        path: "/"
    },
    {
        img: sixthIcon,
        mainText: "Abstract support",
        subText: "Get in touch with a human.",
        
        path: "/"
    }

]

const Features = () => {
    return (
        <section className="grid lg:grid-cols-2 px-28 py-32 gap-24 ">
            {featureCard.map((feature, index) => (
                <div key={index} className="flex gap-5">
                    <img src={feature.img} alt="icon-img" className="h-[90px]" />
                    <div>
                        <h1 className="font-bold text-2xl">{feature.mainText}</h1>
                        <p className="text-2xl ">{feature.subText}</p>
                        <a href={feature.path} className="text-[#4C5FD5] text-xl" > Learn more <span></span></a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Features
