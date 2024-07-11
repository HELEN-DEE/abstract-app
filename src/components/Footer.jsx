

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
            <div className='grid lg:grid-cols-4 lg:w-[65%]'>
                {footerLinks.filter(link => link.mainText !== "Contact Us").map((footer, index) => (
                    <div key={index}>
                        <h1 className='text-2xl font-bold pb-4'>{footer.mainText}</h1>
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
            <div className='lg:flex lg:justify-end lg:w-[62%]'>
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
            <div className='text-end'>
                
                <p className='text-xl'>© Copyright 2023
                    <br />Abstract Studio Design, Inc.
                    <br />All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
