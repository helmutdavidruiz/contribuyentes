import { Modal }          from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"


window.addEventListener('DOMContentLoaded', function () {
    const newHonorarioModal  = new Modal(document.getElementById('newHonorarioModal'))
    const editHonorarioModal = new Modal(document.getElementById('editHonorarioModal'))

    const table = new DataTable('#honorariosTable', {
        language: {
        url: '//cdn.datatables.net/plug-ins/2.3.4/i18n/es-ES.json',
       },
        serverSide: true,
        ajax: '/honorarios/load',
        orderMulti: false,
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
                    <div class="d-flex flex-">
                        <button type="submit" class="btn btn-outline-primary delete-honorario-btn" data-id="${ row.id }">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary edit-honorario-btn" data-id="${ row.id }">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#honorariosTable').addEventListener('click', function (event) {
        const editBtn   = event.target.closest('.edit-honorario-btn')
        const deleteBtn = event.target.closest('.delete-honorario-btn')

        if (editBtn) {
            const honorarioId = editBtn.getAttribute('data-id')

            get(`/honorarios/${ honorarioId }`)
                .then(response => response.json())
                .then(response => openEditHonorarioModal(editHonorarioModal, response))
        } else {
            const honorarioId = deleteBtn.getAttribute('data-id')

            if (confirm('¿Esta seguro de eliminar este honorario?')) {
                del(`/honorarios/${ honorarioId }`).then(response => {
                    if (response.ok) {
                        table.draw()
                    }
                })
            }
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