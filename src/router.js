import { createBrowserRouter } from "react-router-dom";
import FormExam from './page/FormExam';
// import MockTest from './page/MockTest';
import DetailExamresults from "./page/DetailExamresults";
import TableExamResults from "./page/TableExamResults";
import PageMocktest from "./page/PageMocktest";

import PageShowListExam from "./page/PageShowListExam";
import Vstep from "./page/Vstep";
import Toeic from "./page/Toeic";
import BeforeExam from "./page/BeforeExam";
export const router = createBrowserRouter([
  {
    path: "exam/:examId",
    element: <FormExam />,
  },
  {
    path: "/mocktest",
    element: <PageMocktest />
  },
  // {
  //   path : "/" ,
  //   element: <MockTest />,
  // },
  {
    path: "/detail-results/:resultId",
    element: <DetailExamresults />
  },
  {
    path: "/all",
    element: <TableExamResults />
  },
  {
    path: "/exam/all",
    element: <PageShowListExam />
  },
  {
    path: "/vstep",
    element: <Vstep />
  },
  {
    path: "/toeic",
    element: <Toeic />
  },
  {
    path: "/beforeExam",
    element: <BeforeExam />
  }
]);
