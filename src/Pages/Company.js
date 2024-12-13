import React from 'react'
import Ttitle from '../components/shared/Ttitle'
import Table from '../components/shared/Table';
import { IoAdd } from "react-icons/io5";
import { MdOutlineCheckCircle, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Company = () => {
  const companies = [
    {
      sn: 1,
      name: "TechCorp",
      email: "contact@techcorp.com",
      regNo: "TC1234",
      contact: "+1 1234567890",
      insertedDate: "2023-12-01 12:30 PM",
      description: "Leading tech company",
      establishedDate: "2000-05-20",
      active: true,
    },
    {
      sn: 2,
      name: "BizGroup",
      email: "info@bizgroup.com",
      regNo: "BG5678",
      contact: "+44 9876543210",
      insertedDate: "2023-11-15 10:00 AM",
      description: "Business solutions provider",
      establishedDate: "2010-01-15",
      active: false,
    },
    {
      sn: 3,
      name: "NextGen Solutions",
      email: "support@nextgensol.com",
      regNo: "NG8901",
      contact: "+61 400123456",
      insertedDate: "2023-12-05 03:45 PM",
      description: "IT and software solutions",
      establishedDate: "2015-08-10",
      active: true,
    },
    {
      sn: 4,
      name: "EcoBuild",
      email: "info@ecobuild.com",
      regNo: "EB5672",
      contact: "+91 9876543210",
      insertedDate: "2023-10-20 09:30 AM",
      description: "Green construction services",
      establishedDate: "2008-03-18",
      active: false,
    },
    {
      sn: 5,
      name: "GlobalTrade",
      email: "sales@globaltrade.com",
      regNo: "GT3456",
      contact: "+81 123456789",
      insertedDate: "2023-09-25 11:20 AM",
      description: "International trading company",
      establishedDate: "2012-06-22",
      active: true,
    },
    {
      sn: 6,
      name: "MediaWave",
      email: "contact@mediawave.com",
      regNo: "MW4321",
      contact: "+55 2198765432",
      insertedDate: "2023-07-14 02:15 PM",
      description: "Digital marketing agency",
      establishedDate: "2018-11-05",
      active: true,
    },
    {
      sn: 7,
      name: "FinEdge",
      email: "support@finedge.com",
      regNo: "FE6789",
      contact: "+33 612345678",
      insertedDate: "2023-06-30 05:45 PM",
      description: "Financial consultancy",
      establishedDate: "2011-04-30",
      active: false,
    },
    {
      sn: 8,
      name: "EduPlus",
      email: "admin@eduplus.com",
      regNo: "EP2345",
      contact: "+1 9876543210",
      insertedDate: "2023-05-10 10:00 AM",
      description: "Online education platform",
      establishedDate: "2017-09-01",
      active: true,
    },
  ];

  const columns = [
    { label: "S.N", accessor: "sn" },
    { label: "Name", accessor: "name" },
    { label: "Email", accessor: "email" },
    { label: "Reg. No", accessor: "regNo" },
    { label: "Contact Number", accessor: "contact" },
    { label: "Inserted Date", accessor: "insertedDate" },
    { label: "Description", accessor: "description" },
    { label: "Established Date", accessor: "establishedDate" },
    { label: "Active", accessor: "active", Cell: (row) => (row.active ?
      (
        <MdOutlineCheckCircle className="text-green-500" size={20} />
      ) 
      : (        
        <MdClose className="text-red-500" size={20} />
      )
    ) },
  ];

  return (
    <div>
      <Ttitle>Company Data</Ttitle>
        <div className="flex justify-end mb-6">
          <Link to='/addcompany'>
            <button className="inline-flex items-center gap-3 px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
              <IoAdd size={20} />
              Create New
            </button>
          </Link>
        </div>
          <Table columns={columns} data={companies} />
    </div>
  )
}

export default Company