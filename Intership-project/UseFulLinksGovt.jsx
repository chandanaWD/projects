import React from 'react';

const UseFulLinksGovt = () => {
  const sections = [
    {
      title: 'Government Links',
      links: [
        { id: 1, name: 'Andhra Pradesh Government', url: 'https://www.ap.gov.in/' },
        { id: 2, name: 'Central Information Commission', url: 'https://cic.gov.in/' },
        { id: 3, name: 'National Informatic Centre', url: 'https://ap.nic.in/' },
        { id: 4, name: 'UPSC Official Website', url: 'https://www.upsc.gov.in/' },
        { id: 5, name: 'Mee Bhoomi Andhra Pradesh', url: 'https://meebhoomi.ap.gov.in/' }
      ]
    },
    {
      title: 'Civil Society Organisations/NGOs',
      links: [
        { id: 1, name: 'Child Help Foundation', url: 'https://childhelpfoundation.in/' },
        { id: 2, name: 'Akshaya Patra Organization', url: 'https://www.akshayapatra.org/' },
        { id: 3, name: 'Smile Foundation', url: 'https://www.smilefoundationindia.org/' }
      ]
    },
    {
      title: 'Consumer Affairs, Food & Civil Supplies Department',
      links: [
        { id: 1, name: 'National Food Security Portal', url: 'https://nfsa.gov.in/State/AP' },
        { id: 2, name: 'Civil Supplies', url: 'https://civilsupplies.ap.gov.in/' }
      ]
    }
  ];

  return (
    <div className="useful-links-container">
      {sections.map((section, index) => (
        <div className={`section section2-${index}`} key={index}>
          <h2 className="section-title2">{section.title}</h2>
          <table className={`section-table2 table-${index}`} border="1" cellPadding="10" cellSpacing="0">
            <thead className="table-header2">
              <tr>
                <th className="header-cell2">S.No</th>
                <th className="header-cell2">Name</th>
                <th className="header-cell2">Official Links</th>
              </tr>
            </thead>
            <tbody className="table-body2">
              {section.links.map((link) => (
                <tr className="table-row2" key={link.id}>
                  <td className="row-cell2">{link.id}</td>
                  <td className="row-cell2">{link.name}</td>
                  <td className="row-cell2">
                    <a className="link2" href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      ))}
    </div>
  );
};

export default UseFulLinksGovt;