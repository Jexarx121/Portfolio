const IBM = () => {
  return (
    <div className="w-[90%]">
      <h1 className="text-white text-4xl font-bold">Software Engineer</h1>
      <p className="text-sm mb-2">March 2023 - September 2023</p>
      <ol className="text-[#aaabb8] list-disc list-inside text-[20px] marker:text-[#2E9CCA]">
        <li className="py-1">Responsible for Cypress tests on playbook canvas and system interaction on IBM SOAR QRadar.</li>
        <li className="py-1">Removed flakiness on many playbook tests in Jenkins, increasing the build success rate from 70% to 90%.</li>
        <li className="py-1">Converted deprecated Enzyme tests to React Testing Library, improving the pass rate by 15%.</li>
        <li className="py-1">Presented findings on the playbook system which were found in the next major release, boosting user satisfaction by 20%.</li>
        <li className="py-1">Adhered to the work cycle of assigning tasks on Jira, creating PRs with Git and building with Jenkins.</li>
      </ol>
    </div>
  );
}

export default IBM;

