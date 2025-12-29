import { Modal }          from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"


               
window.addEventListener('DOMContentLoaded', function () {

  


    const newHonorarioModal  = new Modal(document.getElementById('newHonorarioModal'))
    const editHonorarioModal = new Modal(document.getElementById('editHonorarioModal'))

    $(document).ready(function(){
        $('#newHonorarioModal').on('hidden.bs.modal', function () {
            $(this).find("input,textarea,select").val('');
          })
    }); 
    
    /* const buttonHonorario = document.getElementById("nuevo-honorario-btn");
      
    buttonHonorario.addEventListener("click", function() {
                   // alert("Nuevo Honorario")
                   $('#newHonorarioModal').on('hidden.bs.modal', function () {
                   $(this).find("input,textarea,select").val('');
                  // $(this).find("input[type=checkbox], input[type=radio]").prop("checked", false);
               // You can also clear validation messages or other dynamic content here
         })

     }) */


     
   

    /*  $(document).ready(function()
     {
   

    // codes works on all bootstrap modal windows in application
        $('#newHonorarioModal').on('hidden.bs.modal', function(e)
         { 
          $(this).removeData();
         }) 

    
   }); */

    const table = new DataTable('#honorariosTable', {
        language: {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando 0 a 0 de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de forma ascendente",
            "sSortDescending": ": Activar para ordenar la columna de forma descendente"
        }
       },
        serverSide: true,
        ajax: '/honorarios/load',
        orderMulti: false,
         rowCallback: (row, data) => {
            if (! data.fueRevisado) {
                row.classList.add('fw-bold')
            }

            return row
        },
        columns: [
            {data: "contribuyente"},
            {data: "fecha"},
            {
                data: row => new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        currencySign: 'accounting'
                    }
                ).format(row.honorario)
            },
            {
                data: row => new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        currencySign: 'accounting'
                    }
                ).format(row.impuesto)
            },
            {
                data: row => new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        currencySign: 'accounting'
                    }
                ).format(row.transferencia)
            },
            {
                data: row => new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        currencySign: 'accounting'
                    }
                ).format(row.total)
            },
            {data: "concepto"},
            {data: "observaciones"},
            
            {
                sortable: false,
                data: row => `
                    <div class="d-flex gap-2">
                        <div>
                            <i class="bi ${ row.fueRevisado ? 'bi-check-circle-fill text-success' : 'bi-check-circle' } alternar-revisado-btn fs-4" 
                                role="button" data-id="${ row.id }"></i>
                        </div>
                        <div class="dropdown">
                            <i class="bi bi-gear fs-4" role="button" data-bs-toggle="dropdown"></i>

                            <ul class="dropdown-menu">
                               
                                <li>
                                    <a class="dropdown-item edit-honorario-btn" href="#" data-id="${ row.id }">
                                        <i class="bi bi-pencil-fill"></i> Editar
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item delete-honorario-btn" href="#" data-id="${ row.id }">
                                        <i class="bi bi-trash3-fill"></i> Eliminar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#honorariosTable').addEventListener('click', function (event) {
        const editBtn   = event.target.closest('.edit-honorario-btn')
        const deleteBtn = event.target.closest('.delete-honorario-btn')
         const alternarRevisadoBtn = event.target.closest('.alternar-revisado-btn')


        if (editBtn) {
            const honorarioId = editBtn.getAttribute('data-id')

            get(`/honorarios/${ honorarioId }`)
                .then(response => response.json())
                .then(response => openEditHonorarioModal(editHonorarioModal, response))
        } else if(deleteBtn){
            const honorarioId = deleteBtn.getAttribute('data-id')

            if (confirm('¿Esta seguro de eliminar este honorario?')) {
                del(`/honorarios/${ honorarioId }`).then(response => {
                    if (response.ok) {
                        table.draw()
                    }
                })
            }
        }else if (alternarRevisadoBtn) {
            const honorarioId = alternarRevisadoBtn.getAttribute('data-id')

            post(`/honorarios/${ honorarioId }/revisado`).then(response => {
                if (response.ok) {
                    table.draw()
                }
            })
        }


    })

    document.querySelector('.create-honorario-btn').addEventListener('click', function (event) {
      
    
        post(`/honorarios`, getHonorarioFormData(newHonorarioModal), newHonorarioModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                    
                    newHonorarioModal.hide()
                           

                }
            })
    })

   

    document.querySelector('.save-honorario-btn').addEventListener('click', function (event) {
        const honorarioId = event.currentTarget.getAttribute('data-id')

        post(`/honorarios/${ honorarioId }`, getHonorarioFormData(editHonorarioModal), editHonorarioModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()

                    editHonorarioModal.hide()
                    
                }
            })
    })


      
})

 



function getHonorarioFormData(modal) {
    let data     = {}
    const fields = [
        ...modal._element.getElementsByTagName('input'),
        ...modal._element.getElementsByTagName('select')
    ]

    fields.forEach(select => {
        data[select.name] = select.value
    })

    return data
}




function openEditHonorarioModal(modal, {id, ...data}) {
    for (let name in data) {
        const nameInput = modal._element.querySelector(`[name="${ name }"]`)

        nameInput.value = data[name]
    }

    modal._element.querySelector('.save-honorario-btn').setAttribute('data-id', id)

    modal.show()
}