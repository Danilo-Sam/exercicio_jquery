$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaNova = $('#nova-tarefa').val();
        const novaTarefa =$('<li></li>');
        $(`
            <div class="container">
                <a href="#" title="${tarefaNova}">
                    ${tarefaNova}
                </a>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nova-tarefa').val('');
        $('ul').on('click','li',function(){
                $(this).css('text-decoration', 'line-through');
        });
    });
});