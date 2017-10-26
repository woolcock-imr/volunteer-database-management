//-----------------------
if($vm.server=='development' && $vm.vm['__ID'].op.project_uid==undefined){
    alert('No project wsa selected. \nThis module should be called from project->More...\nWe select a one automatically for testing')
    $vm.vm['__ID'].op.project_name='moderate';
    $vm.vm['__ID'].op.project_uid='1';
    $vm.vm['__ID'].op.project_pid='20009716';
}
//-----------------------
