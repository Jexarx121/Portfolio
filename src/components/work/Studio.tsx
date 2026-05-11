const Studio = () => {
    return (
        <div className="lg:w-[90%] w-[100%]">
            <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl font-bold">Junior QA Engineer / Frontend Developer</h1>
            <p className="text-sm mb-2">July 2024 - Present</p>
            <ol className="text-[#aaabb8] list-disc list-inside lg:text-[20px] sm:text-[18px] text-[16px] marker:text-[#2E9CCA]">
                <li className="py-1">Developed and customised Shopify theme sections, templates, and reusable components across 10+ client e-commerce stores using Shopify Liquid, JavaScript, CSS, and Shopify Theme Customizer, delivering responsive features aligned with Figma designs and business requirements.</li>
                <li className="py-1">Implemented custom Shopify frontend features including metafields, discount logic, mini-cart selectors, PDP galleries, and responsive UI fixes, improving user experience and reducing homepage flashing by 30% through performance-optimised asset loading.</li>
                <li className="py-1">Customised and extended third-party integrations including Rebuy, Advanced Commerce / Graphene, and Flickity, enabling seamless feature delivery while preserving site stability across ongoing releases.</li>
                <li className="py-1">Built and maintained 300+ Playwright end-to-end regression tests across 30+ Shopify repositories, establishing scalable automated QA coverage and significantly improving release confidence for new features and store launches.</li>
                <li className="py-1">Designed comprehensive Qase test suites covering customer journeys, checkout flows, PDP/PLP validation, shipping rates, and gift card functionality, strengthening pre-release defect detection.</li>
            </ol>
        </div>
    );
}

export default Studio;
