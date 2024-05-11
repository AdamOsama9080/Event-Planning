import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import StackedChart from '../Charts/StackedChart';
import PieChart from '../Charts/PieChart';
import SplineCharts from '../Charts/SplineCharts';
import FakeNavBar from '../FakeNavBar/FakeNavBar';

export default function Dashboard() {
  return (
    <>

          <div className="col-md-9"> 
            <div className="row">
              <FakeNavBar></FakeNavBar>
              <div className="col-lg-3 col-md-6 g-4"> 
              <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">This is the content of card 1.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  g-4"> 
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">This is the content of card 2.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 g-4"> 
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">This is the content of card 3.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 g-4"> 
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Card 4</h5>
                    <p className="card-text">This is the content of card 4.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className="col-lg-12 col-md-12 g-4">
                <StackedChart/>
              </div>

            </div>
            <div className="row">
                <div className='col-md-6 col-sm-12 g-4'>
                    <PieChart></PieChart>
                </div>

                <div className='col-md-6 col-sm-12 g-4'>
                    <SplineCharts></SplineCharts>
                </div>
            </div>
          </div>
    </>
  );
}
