
import { Modal } from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable from "datatables.net"

window.addEventListener('DOMContentLoaded', function () {
    const newContribuyenteModal = new Modal(document.getElementById('newContribuyenteModal'))
    const editContribuyenteModal = new Modal(document.getElementById('editContribuyenteModal'))
    const exportContribuyentesModal = new Modal(document.getElementById('exportContribuyentesModal'))

      $(document).ready(function(){
          $('#newContribuyenteModal').on('hidden.bs.modal', function () {
                   $(this).find("input,textarea,select").val('');
        })
      }); 

    const table = new DataTable('#contribuyentesTable', {
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de forma ascendente",
                "sSortDescending": ": Activar para ordenar la columna de forma descendente"
            }
        },
        serverSide: true,
        ajax: '/contribuyentes/load',
        orderMulti: false,
        columns: [
            { data: "identificador" },
            { data: "nombres" },
            { data: "apellidos" },
            { data: "rfc" },
            { data: "curp" },
            { data: "telefono" },
            { data: "email" },
            { data: "regimenFiscal" },
            { data: "tipoDeclaracion" },
            { data: "impuestoObligacion" },
            {
                sortable: false,
                data: row => `
                    <div class="d-flex flex-">
                        <button type="submit" class="btn btn-outline-primary delete-contribuyente-btn" data-id="${row.id}">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary edit-contribuyente-btn" data-id="${row.id}">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#contribuyentesTable').addEventListener('click', function (event) {
        const editBtn = event.target.closest('.edit-contribuyente-btn')
        const deleteBtn = event.target.closest('.delete-contribuyente-btn')

        if (editBtn) {
            const contribuyenteId = editBtn.getAttribute('data-id')

            get(`/contribuyentes/${contribuyenteId}`)
                .then(response => response.json())
                .then(response => openEditContribuyenteModal(editContribuyenteModal, response))
        } else {
            const contribuyenteId = deleteBtn.getAttribute('data-id')

            if (confirm('¿Esta seguro de eliminar este contribuyente?')) {
                del(`/contribuyentes/${contribuyenteId}`).then(response => {
                    if (response.ok) {
                        table.draw()
                    }
                })
            }
        }
    })

    document.querySelector('.create-contribuyente-btn').addEventListener('click', function (event) {
        post(`/contribuyentes`, getContribuyenteFormData(newContribuyenteModal), newContribuyenteModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                  
                    newContribuyenteModal.hide()
                }
            })
    })

    document.querySelector('.save-contribuyente-btn').addEventListener('click', function (event) {
        const contribuyenteId = event.currentTarget.getAttribute('data-id')

        post(`/contribuyentes/${contribuyenteId}`, getContribuyenteFormData(editContribuyenteModal), editContribuyenteModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                    editContribuyenteModal.hide()
                }
            })
    })

    document.querySelector('.export-contribuyentes-btn').addEventListener('click', function (event) {


      
        const button = event.currentTarget
        //formData.append('format', exportContribuyentesModal._element.querySelector('select[name="format"]').value)
        button.setAttribute('disabled', true)

        const btnHtml = button.innerHTML

        button.innerHTML = `
            <div class="spinner-grow spinner-grow-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        `
        post(`/contribuyentes/export`)
            .then(async response => {
                button.removeAttribute('disabled')
                button.innerHTML = btnHtml
                

                if (response.ok) {

                    

                    
               const reader = response.body.getReader();
               const contentChunks = [];
               let receivedLength = 0;
               const totalLength = response.headers.get('Content-Length');

                     // Process the stream in a loop
             while (true) {
               const { done, value } = await reader.read(); // Read a chunk
                 if (done) {
                   break; // Exit the loop when the stream is finished
              }
             contentChunks.push(value);
             receivedLength += value.length;
        
              // Optional: Update progress indicator
            if (totalLength) {
                const progress = Math.round((receivedLength / totalLength) * 100);
                 console.log(`Download progress: ${progress}%`);
            }
           }

           const contentDisposition = response.headers.get('Content-Disposition');
    
          if (!contentDisposition) {
             console.error("Content-Disposition header not available. Check server CORS configuration.");
           return;
          }

          // 2. Extract the filename using a robust parsing method (e.g., regex)
         // The header can contain 'filename' (ASCII) or 'filename*' (UTF-8 encoded).
          const filenameRegex = /filename\*?=['"]?(.*?)['"]?(;|$)/i;
          const matches = contentDisposition.match(filenameRegex);
          let filename = 'default_filename'; // Fallback filename
    
         if (matches && matches[1]) {
           // Decode the filename if it was URL-encoded (common for filename*)
            filename = decodeURIComponent(matches[1].replace(/['"]/g, ''));
        }

       console.log('Filename extraido:', filename);

       // const filename='report_contribuyentes.xls';
    
          // Combine chunks and initiate download
          iniciandoDescarga(contentChunks, filename, response.headers.get('Content-Type'));
        
              // button.innerHTML = 'Download Complete';
              table.draw()


                    exportContribuyentesModal.hide()
                }
            })


    })


})

function getContribuyenteFormData(modal) {
    let data = {}
    const fields = [
        ...modal._element.getElementsByTagName('input'),
        ...modal._element.getElementsByTagName('select')
    ]

    fields.forEach(select => {
        data[select.name] = select.value
    })

    return data
}

function openEditContribuyenteModal(modal, { id, ...data }) {
    for (let name in data) {

        const nameInput = modal._element.querySelector(`[name="${name}"]`)

        nameInput.value = data[name]
    }

    modal._element.querySelector('.save-contribuyente-btn').setAttribute('data-id', id)

    modal.show()
}


function iniciandoDescarga(chunks, filename, contentType) {
    // Combine the chunks into a single Blob
    const blob = new Blob(chunks, { type: contentType || 'application/octet-stream' });
    
    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a hidden anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download'; // Set the download filename
    a.style.display = 'none';
    document.body.appendChild(a);

    // Simulate a click to start the download
    a.click();

    // Clean up the DOM and revoke the object URL to free memory
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}