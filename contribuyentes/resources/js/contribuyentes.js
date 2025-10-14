
import { Modal }          from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"

window.addEventListener('DOMContentLoaded', function () {
    const newContribuyenteModal  = new Modal(document.getElementById('newContribuyenteModal'))
    const editContribuyenteModal = new Modal(document.getElementById('editContribuyenteModal'))

    const table = new DataTable('#contribuyentesTable', {
        language: {
        url: '//cdn.datatables.net/plug-ins/2.3.4/i18n/es-ES.json',
       },
        serverSide: true,
        ajax: '/contribuyentes/load',
        orderMulti: false,
        columns: [
            {data: "identificador"},
            {data: "nombres"},
            {data: "apellidos"},
            {data: "rfc"},
            {data: "curp"},
            {data: "telefono"},
            {data: "email"},
            {data: "regimenFiscal"},
            {data: "tipoDeclaracion"},
            {data: "impuestoObligacion"},
            {
                sortable: false,
                data: row => `
                    <div class="d-flex flex-">
                        <button type="submit" class="btn btn-outline-primary delete-contribuyente-btn" data-id="${ row.id }">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary edit-contribuyente-btn" data-id="${ row.id }">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#contribuyentesTable').addEventListener('click', function (event) {
        const editBtn   = event.target.closest('.edit-contribuyente-btn')
        const deleteBtn = event.target.closest('.delete-contribuyente-btn')

        if (editBtn) {
            const contribuyenteId = editBtn.getAttribute('data-id')

            get(`/contribuyentes/${ contribuyenteId }`)
                .then(response => response.json())
                .then(response => openEditContribuyenteModal(editContribuyenteModal, response))
        } else {
            const contribuyenteId = deleteBtn.getAttribute('data-id')

            if (confirm('¿Esta seguro de eliminar este contribuyente?')) {
                del(`/contribuyentes/${ contribuyenteId }`).then(response => {
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

        post(`/contribuyentes/${ contribuyenteId }`, getContribuyenteFormData(editContribuyenteModal), editContribuyenteModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                    editContribuyenteModal.hide()
                }
            })
    })
})

function getContribuyenteFormData(modal) {
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

function openEditContribuyenteModal(modal, {id, ...data}) {
    for (let name in data) {
        
        const nameInput = modal._element.querySelector(`[name="${ name }"]`)

        nameInput.value = data[name]
    }

    modal._element.querySelector('.save-contribuyente-btn').setAttribute('data-id', id)

    modal.show()
}