const IBM = () => {
  return (
    <div className="lg:w-[90%] w-[100%]">
      <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl font-bold">Software Engineer</h1>
      <p className="text-sm mb-2">March 2023 - September 2023</p>
      <ol className="text-[#aaabb8] list-disc list-inside lg:text-[20px] sm:text-[18px] text-[16px] marker:text-[#2E9CCA]">
        <li className="py-1">Responsible for automating JS Cypress tests on IBM SOAR QRadar, improving confidence in core playbook workflows.</li>
        <li className="py-1">Developed 30+ end-to-end tests for canvas interaction, playbook creation and failure handling, including coverage for critical user flows.</li>
        <li className="py-1">Refactored 20+ legacy tests, raising build success to 90% on Jenkins and reducing flaky failures.</li>
      </ol>
    </div>
  );
}

export default IBM;

