//-----------------------
if($vm.server=='development' && $vm.vm['__ID'].op.volunteer_uid==undefined){
    alert('No volunteer was selected. \nThis module should be called from Volunteer->More...\nWe select a one automatically for testing')
    $vm.vm['__ID'].op.volunteer_name='Zhhiming Zhou';
    $vm.vm['__ID'].op.volunteer_login_email='zzm.vmiis@gmail.com';
    $vm.vm['__ID'].op.volunteer_uid='67';
    $vm.vm['__ID'].op.volunteer_pid='20008533';
}
//-----------------------
