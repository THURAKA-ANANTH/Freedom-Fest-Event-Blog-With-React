import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CustomTableContainer = styled(TableContainer)({
  maxHeight: 440,
  border: '1px solid #000',
});

const CustomTable = styled(Table)({
  minWidth: 700,
});

const CustomTableCell = styled(TableCell)({
  padding: '8px',
  border: '1px solid #000',
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '16px',
});

const ScheduleTitle = styled('div')({
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

const columns = [
  { id: 'Time', label: 'TIME/VENUE', minWidth: 170 },
  { id: 'TIME1_1', label: '9:00 AM', minWidth: 100 },
  {
    id: 'TIME1_2',
    label: '09:30 AM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_3',
    label: '10:00 AM - 10:45 AM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_4',
    label: '11:00 AM - 01:15 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_5',
    label: '01:15 PM - 02:15 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_6',
    label: '02:15 PM - 04:30PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const updatedColumn1 = [
  { id: 'Time', label: 'TIME/VENUE', minWidth: 170 },
  { id: 'TIME1_1', label: '09:00 AM - 09:45 AM', minWidth: 100 },
  {
    id: 'TIME1_2',
    label: '10:00 AM - 12:15 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_3',
    label: '12:15 PM - 01:15 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_4',
    label: '01:15 PM - 03:30 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TIME1_5',
    label: '03:45 PM - 4:30 PM',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];
const rowsDay1 = [
  createData('AUDITORIUM','REGISTRATIONS(RAZORPAY)', "INDUCTION", "KEYNOTE WITH CHATGPT","TECH  FOR RURAL INDIA",'LUNCH BREAK', "Design Thinking",),
createData(' ECE SEMINAR HALL - 207', 'REGISTRATIONS(101-250)', "INDUCTION", "KEYNOTE WITH CHATGPT","LOCALIZATION OF TOOLS","LUNCH BREAK", 'OPEN STREET MAPS',),
createData('CIVIL SEMINAR HALL - 209', "REGISTRATIONS(251-350)","INDUCTION","KEYNOTE WITH CHATGPT","MARKDOWN - THE DOCUMENTATION LANGUAGES",'LUNCH BREAK', "SETTING UP A NETWORK",),
createData('CSE SEMINAR HALL - 335 ', 'REGISTRATIONS(351-470)', "INDUCTION", "KEYNOTE WITH CHATGPT","AGILE METHADOLOY","LUNCH BREAK", 'SECURING YOURSELF ON INTERNET',),
createData('EEE SEMINAR HALL - 101', "REGISTRATIONS(471-590)","INDUCTION","KEYNOTE WITH CHATGPT","VISUAL PROGRAMMING",'LUNCH BREAK', "CONTRIBUTING TO WIKIPIEDIA",),
createData('MECH SEMINAR ALL - 001', 'REGISTRATIONS(591-710)', "INDUCTION", "KEYNOTE WITH CHATGPT","-","LUNCH BREAK", 'STORYBOARDING WITH EXCALIDRAW', ),
createData('MBA SEMINAR ALL - 131', 'REGISTRATIONS(711)', "INDUCTION", "KEYNOTE WITH CHATGPT","-","LUNCH BREAK", '-',),
createData('CSE LAB 1 & 2', '-', "-", "-","DATABASE MANAGEMENT WITH MARIADB","LUNCH BREAK", 'DATABASE MANAGEMENT WITH MARIADB',),
createData('CSE LAB 3', "-","-","-","VECTOR GRAPHICS WITH INKSCAPE",'LUNCH BREAK', "SENSOR INTERFACE WITH ARDUINO",),
createData('CSE LAB 4 & 5', '-', "-", "-","PROGRAMMING WITH PYTHON","LUNCH BREAK", 'PROTOTYPING WITH PENPOT',),
createData('CSE LAB 6 & 7', "-","-","-","RESPONSIVE WEBPAGE DEVELOPMENT",'LUNCH BREAK', "NO-CODE WEB DESIGN WITH WORDPRESS",),
createData('CSE LAB 8', '-',"-","-","IMAGE PROCESSING WITH OPENCV","LUNCH BREAK",'SENSOR INTERFACING WITH ARDUINO',),
createData('CSE LAB 9', '-', "-", "-","3D ANIMATION USING BLENDER","LUNCH BREAK", '3D ANIMATION USING BLENDER',),
createData('DSP LAB', '-', "-", "-","LINUX ADMINISTRATION","LUNCH BREAK","CIRCUIT DESIGN WITH FRITZING",),
createData('ECAD LAB', '-',"-","-","SETTING UP A GIT PROJECT","LUNCH BREAK",'VERSION CONTROL WITH GIT',),
createData("EEE LAB","-","-","-","-","LUNCH BREAK","-","-","-","-","-"),
createData('MPMC LAB', '-', "-", "-","MICROSERVICES WITH SPRINGBOOT","LUNCH BREAK", 'MICROSERVICES WITH SPRINGBOOT',),
createData('CAD LAB - 102', '-', "-", "-","CODING CHALLENGE","LUNCH BREAK", 'CODING CHALLENGE',),
createData('ADC LAB',"-","-","-","-",'LUNCH BREAK', "-",),
createData('ROOM NO.226 ',"-","-","-","PAPER PRESENTATION",'LUNCH BREAK', "PAPER PRESENTATION",),
createData('ECE CORRIDOR ',"-","-","-","POSTER MAKING",'LUNCH BREAK', "POSTER MAKING",),
createData('ROOM NO - 222',"-","-","-","IDEA PRESENTATION",'LUNCH BREAK', "IDEA PRESENTATION",),
createData('ROOM NO - 201',"-","-","-","REEL MAKING",'LUNCH BREAK', "REEL MAKING",),
createData('ORAL COMMUNICATION LAB', '-', "-", "-","JAM","LUNCH BREAK", '-',),
createData('MBA ACTIVITY ROOM', '-', "-", "-","MOCK PARLIMENT","LUNCH BREAK", '-',),
createData('ROOM NO - 216', '-', "-", "-","CREATIVE DRAWING","LUNCH BREAK", 'CREATIVE DRAWING',),
createData('ROOM NO - 221', '-', "-", "-","CREATIVE WRITING","LUNCH BREAK", 'CREATIVE WRITING',),


];

const rowsDay2 = [
createData('AUDITORIUM', 'INTERACTION', "TECH  FOR RURAL INDIA", "LUNCH BREAK","DESIGN THINKING",'CLOSING NOTES'),
createData('CSE SEMINAR HALL - 335 ', '-', "AGILE METHADOLOGY", "LUNCH BREAK","-",'CLOSING NOTES'),
createData('ECE SEMINAR HALL - 207', '','LOCALIZATION OF TOOLS', "LUNCH BREAK", "OPEN STREET MAPS",'CLOSING NOTES'),
createData('EEE SEMINAR HALL - 101', "-","VISUAL PROGRAMMING","LUNCH BREAK","CONTRIBUTING TO WIKIPEDIA",'CLOSING NOTES'),
createData('CIVIL SEMINAR HALL - 209', '-', "MARKDOWN - THE DOCUMENTATION LANGUAGE", "LUNCH BREAK","SETTING UP A NETWORK",'CLOSING NOTES'),
createData('MECH SEMINAR ALL - 001', '-', "STORY BOARDING WITH EXCALIDRAW", "LUNCH BREAK","-",'CLOSING NOTES'),
createData('CSE LAB 1 & 2', '-', "3D ANIMATION USING BLENDER", "LUNCH BREAK","3D ANIMATION USING BLENDER","-", ),
createData(' CSE LAB 3', "-","VECTOR GRAPHICS WITH INKSCAPE", "LUNCH BREAK",'-', "-", "-",),
createData(' CSE LAB 4 & 5',"-", 'PROGRAMMING WITH PYTHON', "LUNCH BREAK", "PROTOTYPING WITH PENPOT","-",),
createData(' CSE LAB 6 & 7', "-","RESPONSIVE WEBPAGE DEVELOPMENT","LUNCH BREAK",'N0-CODE WEB DESIGN WITH WORDPRESS',""),
createData(' CSE LAB 8', '-',"IMAGE PROCESSING WITH OPENCV","LUNCH BREAK","SENSORS INTERFACING WITH ARDUINO","-",),
createData(' CSE LAB 9', '-', "-", "LUNCH BREAK","-","-",),
createData(' DSP LAB', '-', "LINUX ADMINISTRATION", "LUNCH BREAK","CIRCUIT DESIGN WITH FRITZING","-"),
createData(' ECAD LAB', '-',"SETTING UP A GIT PROJECT","LUNCH BREAK","VERSION CONTROL USING GIT",),
createData(' CAD LAB - 102', '-', "CODING CHALLENGE", "LUNCH BREAK","-", '-',),
createData('ADC LAB',"-","PROJECT EXPO","LUNCH BREAK","-",'-', ),
createData('ROOM NO - 201',"-","REEL MAKING",'LUNCH BREAK', "-",'CLOSING NOTES'),
createData('ECE CORRIDOR ',"-","POSTER MAKING",'LUNCH BREAK', "POSTER MAKING",),
createData('ROOM NO - 222',"-","IDEA PRESENTATION",'LUNCH BREAK', "-","-"),
createData('MBA ACTIVITY ROOM', '-',"MOCK PARLIMENT","LUNCH BREAK", '-','CLOSING NOTES'),
createData('ROOM NO.226 ',"-","PAPER PRESENTATION",'LUNCH BREAK', "-","-"),
createData('ROOM NO - 216', '-',"CREATIVE DRAWING","LUNCH BREAK", '-','-'),
createData('ROOM NO - 221', '-',"CREATIVE WRITING","LUNCH BREAK", '-','-'),

];

function createData(
  Time,
  TIME1_1,
  TIME1_2,
  TIME1_3,
  TIME1_4,
  TIME1_5,
  TIME1_6

) {
  return {
    Time,
    TIME1_1,
    TIME1_2,
    TIME1_3,
    TIME1_4,
    TIME1_5,
    TIME1_6
  };
}

export default function StickyHeadTable() {
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(''); // Initialize with an empty string

  const updateSchedule = () => {
    // Update your schedule data here

    // Get the current date and time
    const currentTimestamp = "18/10/23, 09:00 AM";

    // Update the state with the current timestamp
    setLastUpdateTimestamp(currentTimestamp);
  };

  useEffect(() => {
    // Call updateSchedule to set the initial timestamp
    updateSchedule();
  }, []);
  const handleDownloadAsPDF = () => {
    const doc = new jsPDF('landscape');
    doc.addFont('helvetica', 'normal');
    doc.setFont('helvetica');

// Set font size for the specific text
doc.setFontSize(15);

    
    // Add Day 1 schedule to the PDF
    const selectedRows = selectedDay === 'Day 1' ? rowsDay1 : rowsDay2;
    const selectedColumns = selectedDay === 'Day 1' ? columns : updatedColumn1; // Use selectedColumns for Day 2
  
    doc.text(`Freedom Fest ${selectedDay} Schedule`, 10, 10,{marginBottom:0});
    doc.text(`Schedule is updated at ${lastUpdateTimestamp}`, 10, 20, { fontSize: 10 });
    doc.autoTable({
      head: [selectedColumns.map((column) => column.label)],
      body: selectedRows.map((row) => selectedColumns.map((column) => row[column.id])),
      startY: 25,
      theme: 'grid',
      margin: { top: 30 },
      styles: {
        cellWidth: 'auto',
        valign: 'middle',
        halign: 'center',
      },
    
      columnStyles: {
        0: { halign: 'center' },
        1: { halign: 'center' },
        2: { halign: 'center' },
        3: { halign: 'center' },
        4: { halign: 'center' },
        5: { halign: 'center' },
        6: { halign: 'center' },
        7: { halign: 'center' },
        8: { halign: 'center' },
        9: { halign: 'center' },
        10: { halign: 'center' },
        11: { halign: 'center' },
        12: { halign: 'center' },
        13: { halign: 'center' },
        14: { halign: 'center' },
      },
      didDrawCell: (data) => {
        if (data.cell.raw === 'WEB devolpment') {
          data.cell.styles.fillColor = [255, 0, 0]; // Set the background color to red
        }
      },
    });
  
    doc.save('Freedom_Fest_schedule.pdf');
  };
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedDay, setSelectedDay] = useState('Day 1');
  const [selectedColumns, setSelectedColumns] = useState(columns);
  const [columnWidths, setColumnWidths] = useState({});

  useEffect(() => {
    const calculateColumnWidths = () => {
      const newColumnWidths = {};
      const selectedRows = getRows();

      if (selectedRows.length > 0) {
        selectedColumns.forEach((column) => {
          const maxWidth = selectedRows
            .map((row) => {
              const value = row[column.id];
              if (value) {
                if (typeof value === 'string') {
                  return value.length;
                }
                return value.toString().length;
              }
              return 0;
            })
            .reduce((a, b) => Math.max(a, b), 0);

          newColumnWidths[column.id] = maxWidth * 8 + 16;
        });
      }
      setColumnWidths(newColumnWidths);
    };

    calculateColumnWidths();
  }, [selectedDay]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDayButtonClick = (day) => {
    setSelectedDay(day);
    if (day === 'Day 1') {
      setSelectedColumns(columns);
    } else if (day === 'Day 2') {
      // Update the column labels for Day 2
      const updatedColumns = updatedColumn1.map((column) => {
        if (column.id === 'TIME1_1') {
          return { ...column, label: '09:00 AM - 09:45 AM' };
        } else if (column.id === 'TIME1_2') {
          return { ...column, label: '10:00 AM - 12:15 PM' };
        } else if (column.id === 'TIME1_3') {
          return { ...column, label: '12:15 PM - 01:15 PM' };
        }
        else if (column.id === 'TIME1_4') {
          return { ...column, label: '01:15 PM - 03:30 PM' };
        }
        else if (column.id === 'TIME1_5') {
          return { ...column, label: '03:45 PM - 4:30 PM' };
        }
        return column;
      });
      setSelectedColumns(updatedColumns);
    }
  };

  const getRows = () => {
    return selectedDay === 'Day 1' ? rowsDay1 : rowsDay2;
  };

  return (

    <div style={{ margin: '20px' }}>
      <ScheduleTitle sx={{ fontSize: "30px" }}>Schedule</ScheduleTitle>
      <marquee
            className="smooth-marquee"
            behavior="scroll"
            direction="left"
            style={{ color: 'red', marginTop: '25px', marginBottom: '5px', fontWeight: 'bold', fontSize: '1.2rem' }}
            scrollamount="5"
            scrolldelay="100"
          >
            Schedule is updated at {lastUpdateTimestamp}.
          </marquee>
      <ButtonContainer>
        <Button
          variant={selectedDay === 'Day 1' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleDayButtonClick('Day 1')}
        >
          Day 1
        </Button>
        <Button
          variant={selectedDay === 'Day 2' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleDayButtonClick('Day 2')}
        >
          Day 2
        </Button>
      </ButtonContainer>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <CustomTableContainer>
          <CustomTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {selectedColumns.map((column) => (
                  <CustomTableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: columnWidths[column.id] }}
                  >
                    {column.label}
                  </CustomTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getRows()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {selectedColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <CustomTableCell key={column.id} align="center">
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </CustomTableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </CustomTable>
        </CustomTableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={getRows().length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDownloadAsPDF}
          style={{ margin: '16px' }}
        >
          Download as PDF
        </Button>
      </Paper>
    </div>
  );
}

