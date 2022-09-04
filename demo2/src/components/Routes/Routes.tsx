import React from 'react';
import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { lazyComponent } from '../../common/utils';



import { Teachers } from '../../pages/Student_KM/Teachers';



import { StudentAttendance } from '../../pages/Student_attendance_SB/Student_attendance';



const Tab = lazyComponent('Tab', import('../../pages/Tab/Tab'));
const Accordian = lazyComponent('Accordian', import('../../pages/Accordian/Accordian'));
const Subject = lazyComponent('Subject', import('../../pages/Subject_kk/Subject'));

const Student = lazyComponent('Student', import('../../pages/Student_AV/Student'));
const Home = lazyComponent('Home', import('../../pages/Home/Home'));
const PageNotFound = lazyComponent('PageNotFound', import('../../pages/PageNotFound/PageNotFound'));
const Card = lazyComponent('Card', import('../../pages/Card/Cards'));
const TreeStrcture = lazyComponent('TreeStrcture', import('../../pages/Tree-Strcture/Tree-Strcture'));
export const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route element={<Student />} path="/" />
    <Route element={<Home />} path="/home" />
    <Route element={<PageNotFound />} path="*" />
    <Route element={<Teachers/>} path="/teachers" />
    <Route element={<Subject/>} path="/Subject" />

   
    <Route element={<StudentAttendance />} path="/StudentAttendance" />
    <Route element={<Accordian />} path="/Accordian" />
    <Route element={<Tab />} path="/Tab" />

    <Route element={<Card/>} path="/Cards" />
    <Route element={<TreeStrcture/>} path="/TreeStrcture" />
    

    <Route element={<Subject />} path="/subject" />

  </RoutesRRD>
);

/*
 * Komal K -> Subject
 * Yogesh -> department
 * Nivant -> STudent Note
 * Teacher -> Komal M
 * Sanket -> STtudent Attendance 
 * Ranjit -> Teacher Notes
 */