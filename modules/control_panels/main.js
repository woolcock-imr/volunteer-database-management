var volunteer_database__ID=function(){
    //---------------------------------------------
    _app_id="volunteer_database_";
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/woolcock-imr/volunteer-database-management/modules';
    //---------------------------------------------
    //database table id:
    var volunteer_tid                   ='20008533';
    var call_log_tid                    ='20009655';
    var research_participation_tid      ='20009681';
    var admin_permission_tid            ='20009714';
    var project_tid                     ='20009716';
    //---------------------------------------------
    //variables
    var v={
        app_id:_app_id,
        volunteer_tid:volunteer_tid,
        call_log_tid:call_log_tid,
        research_participation_tid:research_participation_tid,
        medical_research_volunnter_panel:A+'volunteer_control_panel',
     }
    //---------------------------------------------
    //panels
    L[A+'volunteer_control_panel']      ={var:v,url:B+'/records/volunteer/control_panel.html'};
    L[A+'project_control_panel']        ={var:v,url:B+'/records/project/control_panel.html'};
    //---------------------------------------------
    //links
    L[A+'registration_demographic']                 ={table_id:volunteer_tid,               var:v,url:B+'/records/volunteers.html',panel:'volunteer_control_panel'};
    L[A+'registration_demographic_research']        ={table_id:volunteer_tid,               var:v,url:B+'/records/volunteers_research.html',panel:'volunteer_control_panel'};
    L[A+'volunteer_demographic_child']              ={table_id:volunteer_tid,               var:v,url:B+'/records/volunteer/demographic.child.html'};
    L[A+'volunteer_subscription_child']             ={table_id:volunteer_tid,               var:v,url:B+'/records/volunteer/subscription.child.html'};
    L[A+'volunteer_medical_status_child']           ={table_id:volunteer_tid,               var:v,url:B+'/records/volunteer/diagnose.child.html'};
    L[A+'volunteer_call_log_child']                 ={table_id:call_log_tid,                var:v,url:B+'/records/volunteer/call_log.child.html'};
    L[A+'volunteer_research_participation_child']   ={table_id:research_participation_tid,  var:v,url:B+'/records/volunteer/research_participation.child.html'};
    L[A+'volunteer_research_summary']   ={table_id:research_participation_tid,  var:v,url:B+'/records/volunteer/volunteer_research_summary.html'};

    L[A+'volunteer_search']                         ={table_id:project_tid,                 var:v,url:B+'/records/project_list_search.html',sub_rec:'project_volunteers_search'};
    L[A+'project_volunteers_search']                ={table_id:volunteer_tid,                var:v,url:B+'/records/volunteer/project_volunteers_search.html'};

    L[A+'projects']                                 ={table_id:project_tid,                 var:v,url:B+'/records/projects.html',panel:'project_control_panel'};
    L[A+'projects_research']                        ={table_id:project_tid,                 var:v,url:B+'/records/projects_research.html',sub_rec:'project_volunteers'};
    L[A+'project_list']                             ={table_id:project_tid,                 var:v,url:B+'/records/project_list.html',sub_rec:'project_volunteers_research',sub_new:'project_volunteers_new',sub_part:'project_volunteers_part',sub_all:'project_volunteers_all',sub_fail:'project_volunteers_failure',vol_rec:'registration_demographic_research'};
    L[A+'project_child']                            ={table_id:project_tid,                 var:v,url:B+'/records/project/project.child.html'};
    L[A+'project_volunteers']                       ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers.html',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_research']              ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers_research.html',call_rec:'volunteer_call_log_child',sub_rec:'volunteer_research_participation_child',sum_rec:'volunteer_research_summary',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_part']                  ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers_part.html',call_rec:'volunteer_call_log_child',sub_rec:'volunteer_research_participation_child',sum_rec:'volunteer_research_summary',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_new']                   ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers_new.html',call_rec:'volunteer_call_log_child',sub_rec:'volunteer_research_participation_child',sum_rec:'volunteer_research_summary',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_all']                   ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers_all.html',call_rec:'volunteer_call_log_child',sub_rec:'volunteer_research_participation_child',sum_rec:'volunteer_research_summary',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_failure']              ={table_id:research_participation_tid,  var:v,url:B+'/records/project/project_volunteers_failure.html',call_rec:'volunteer_call_log_child',sub_rec:'volunteer_research_participation_child',sum_rec:'volunteer_research_summary',panel:'volunteer_control_panel',expand:'project_volunteers_dob_mc'};
    L[A+'project_volunteers_dob_mc']                ={table_id:volunteer_tid,               var:v,url:B+'/records/project/project_volunteers_dob_mc.html'};


    L[A+'volunteer_research_participation']         ={table_id:research_participation_tid,  var:v,url:B+'/records/research_participation.html'};
    L[A+'volunteer_demographic_with_medical_status']={table_id:volunteer_tid,               var:v,url:B+'/administration/volunteer_demographic_with_medical_status.html'};
    L[A+'volunteer_call_log']                       ={table_id:call_log_tid,                var:v,url:B+'/records/call_log.html'};

    L[A+'email_list_with_newsletter_subscription']  ={table_id:admin_permission_tid,        var:v,url:B+'/reports/email_list_newsletter.html'};
    L[A+'volunteer_demographic_with_newsletters']   ={table_id:admin_permission_tid,        var:v,url:B+'/administration/volunteer_demographic_with_newsletters.html'};
    //---------------------------------------------
    //check counts
    //L[A+'registration_demographic'].sql_count="select count(ID) from [TABLE-"+volunteer_tid+"] where @('Medical_Research')='1'";
    //---------------------------------------------
}
volunteer_database__ID();
