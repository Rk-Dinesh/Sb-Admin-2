import React from "react"
import Card from "./Card"

function Dashboard() {

    let data = [{
        title: "Earnings (Monthly)",
        value: "$40,000",
        color: "primary",
        icon: "fa-calendar",
        isProgress:true
    },
    {
        title: "Earnings (Annual)",
        value: "$2,15,000",
        color: "success",
        icon: "fa-dollar-sign",
        isProgress: true
    },
    {
        title: "Task",
        value: "75",
        color: "info",
        icon: "fa-clipboard-list",
        isProgress: false
    },
    {
        title: "Pending Request",
        value: "18",
        color: "warning",
        icon: "fa-comments",
        isProgress: true
    }
    ]
    return <>
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {data.map((e, i) => {
                            return <Card key={i} input={e} />
                        })}
                    </div>

                    {/* <!-- Content Row --> */}

                </div>
            </div>
            {/* <!-- End of Main Content --> */}
        </div>
    </>
}

export default Dashboard;
