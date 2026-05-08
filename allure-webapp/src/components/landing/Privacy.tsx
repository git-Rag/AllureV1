import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section className="section" id="privacy" style={{ textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <p className="mono" data-animate>Silicon Sanctuary</p>
        <h2 style={{ marginBottom: '32px' }} data-animate>No Cloud. No Logs. <br/> No Compromise.</h2>
        <p className="lead" style={{ margin: '0 auto 40px' }} data-animate>Allure runs locally on your Apple Neural Engine or Tensor Core. Your secrets stay where they belong: with you.</p>
        <button className="btn btn-primary" data-animate>Reserve Your Spot</button>
      </div>
    </section>
  );
};

export default Privacy;
