var module_list__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/woolcock-imr/volunteer-database-management';
    var v={ app_id:_app_id }
    //---------------------------------------------
    //database table:
    //---------------------------------------------
    //variables:
    //---------------------------------------------
    L[A+'volunteer_registration_record']    ={table_id:'20008533',var:v,url:B+'/modules/volunteer_database/registration_demographic.html'};
    L[A+'call_log']                         ={table_id:'20009655',var:v,url:B+'/modules/volunteer_database/call_log.html'};
    L[A+'research_participation']           ={table_id:'20009681',var:v,url:B+'/modules/volunteer_database/participant_a_medical_research_project.html',volunteer_pid:'20008533'};
    L[A+'medical_research_volunnter_panel'] ={table_id:'--------',var:v,url:B+'/modules/volunteer_database/medical_research_volunteer_panel.html'};
    L[A+'email_list_newsletter']            ={table_id:'20009713',var:v,url:B+'/modules/volunteer_database/reports/email_list_newsletter.html'};
    L[A+'volunteer_registration_record_admin']    ={table_id:'20009714',var:v,url:B+'/modules/volunteer_database/registration_demographic_admin.html'};
}
module_list__ID();
