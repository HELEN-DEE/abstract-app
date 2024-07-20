

const footerLinks = [
    {
        mainText: "Abstract",
        labels: [
            { label: "Start trial", path: "/start-trial" },
            { label: "Pricing", path: "/pricing" },
            { label: "Download", path: "/download" }
        ]
    },
    {
        mainText: "Resources",
        labels: [
            { label: "Blog", path: "/blog" },
            { label: "Help center", path: "/help-center" },
            { label: "Release notes", path: "/release-notes" },
            { label: "Status", path: "/status" }
        ]
    },
    {
        mainText: "Community",
        labels: [
            { label: "Twitter", path: "/twitter" },
            { label: "LinkedIn", path: "/linkedin" },
            { label: "Facebook", path: "/facebook" },
            { label: "Dribbble", path: "/dribbble" },
            { label: "Podcast", path: "/podcast" }
        ]
    },
    {
        mainText: "Company",
        labels: [
            { label: "About us", path: "/about-us" },
            { label: "Careers", path: "/careers" },
            { label: "Legal", path: "/legal" }
        ]
    },
    {
        mainText: "Contact Us",
        labels: [
            { label: "info@abstract.com", path: "/contact" }
        ]
    }
]

const Footer = () => {
    return (
        <footer className='bg-black text-white lg:px-24  px-12 py-6'>
            <div className='grid lg:grid-cols-4 lg:w-[65%] grid-cols-2  lg:gap-0 gap-x-12 gap-y-7'>
                {footerLinks.filter(link => link.mainText !== "Contact Us").map((footer, index) => (
                    <div key={index}>
                        <h1 className='lg:text-2xl text-base font-bold lg:pb-4 pb-2'>{footer.mainText}</h1>
                        <ul>
                            {footer.labels.map((item, index) => (
                                <li key={index}>
                                    <a href={item.path} className='capitalize hover:underline '>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='flex justify-end lg:w-[62%] '>
                {footerLinks.filter(link => link.mainText === "Contact Us").map((footer, index) => (
                    <div key={index}>
                        <h1 className='text-base font-bold'>{footer.mainText}</h1>
                        <ul>
                            {footer.labels.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.path} className='capitalize hover:underline'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='lg:text-end'>
                
                <p className='lg:text-xl text-md pt-4'>© Copyright 2023
                    <br />Abstract Studio Design, Inc.
                    <br />All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
