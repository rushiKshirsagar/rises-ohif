import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RisesTrapReport = () => {
  const search = window.location.search;

  // Create an instance of URLSearchParams
  const params = new URLSearchParams(search);

  // Get a specific parameter by name, e.g., "id"
  const patientId = params.get('StudyInstanceUIDs');
  const [patientData, setPatientData] = useState([
    {
      id: 1,
      patientID: 'DummyPatID!',
      patientName: 'Prabhakar Murty',
      patientAge: '62Y',
      patientSex: 'M',
      studyDate: '20190313',
      institutionName: 'DummyInstName!',
      bodyPartExamined: 'CHEST',
      referringPhysicianName: '!',
      aiProcessing: 'CHEST',
      findings: '',
      impressions: '',
      notes: '',
      reportProcessing: 'PENDING',
      signedBy: '',
      instanceName: '1.2.840.114356.2022.19.18.115.17.143.1923.1',
      instance:
        'http://vyh.risessoft.in/media/CovidInstanceIds/1.2.840.114356.2022.19.18.115.17.143.1923.1.png',
      prediction: 'Atelectasis',
      cardiomegaly: 0.6756831407547,
      emphysema: 0.328999996185303,
      effusion: 0.439999997615814,
      cavity: 0.0,
      infiltration: 0.569,
      mass: 0.0,
      nodule: 0.0,
      tuberculosis: 0.0020000000949949,
      atelectasis: 0.985955059528351,
      pneumothorax: 0.0,
      pleural_Thickening: 0.448000013828278,
      pneumonia: 0.974757730960846,
      fibrosis: 0.624000012874603,
      edema: 0.0920000001788139,
      consolidation: 0.180000007152557,
      created: '2024-04-17T23:39:40.137944+05:30',
    },
  ]);

  // const getPatientData = async () => {
  //   const response = await fetch(
  //     `http://52.66.189.209:8031/covidProcessedList/?instanceName=${patientId}`
  //   );
  //   const data = response.body;
  //   setPatientData(data);
  // };

  // useEffect(() => {
  //   getPatientData();
  // }, []);

  // console.log('----', patientId);

  return (
    <>
      <div style={{ color: 'white', margin: 'auto', fontSize: '20px' }}>Rises TRAP Report</div>

      <Accordion
        style={{
          background: 'rgba(4, 28, 74, var(--tw-bg-opacity))',
          borderRadius: '5px',
          color: 'white',
          margin: '10px 0 10px 0',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Patient Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>Patient Name: {patientData[0].patientName}</div>
            <div>Patient ID: {patientData[0].patientID}</div>
            <div>Age: {patientData[0].patientAge}</div>
            <div>Sex: {patientData[0].patientSex}</div>
            <div>Prediction: {patientData[0].prediction}</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: 'rgba(4, 28, 74, var(--tw-bg-opacity))',
          borderRadius: '5px',
          color: 'white',
          margin: '10px 0 10px 0',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <table style={{ border: '1px solid white' }}>
        <tr>
          <td style={{ color: 'white' }}>Main Table</td>
        </tr>
      </table>
    </>
  );
};

export default RisesTrapReport;
