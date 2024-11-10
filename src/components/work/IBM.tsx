const IBM = () => {
  return (
    <div className="lg:w-[90%] w-[100%]">
      <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl font-bold">Software Engineer</h1>
      <p className="text-sm mb-2">March 2023 - September 2023</p>
      <ol className="text-[#aaabb8] list-disc list-inside lg:text-[20px] sm:text-[18px] text-[16px] marker:text-[#2E9CCA]">
        <li className="py-1">Responsible for JavaScript Cypress tests on IBM SOAR QRadar, a system using playbooks to automatically step through tasks in response to a security event.</li>
        <li className="py-1">Developed over 30 end-to-end tests for the playbook system from canvas interaction to automatic playbook creation and proper failure handling.</li>
        <li className="py-1">Removed flakiness on over 20 tests on Jenkins, increasing build success rate from 70% to 90%.</li>
        <li className="py-1">Contributed to the next major release of SOAR QRadar through comprehensive quality assurance on the playbook system.</li>
      </ol>
    </div>
  );
}

export default IBM;

