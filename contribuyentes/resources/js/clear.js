
import $ from 'jquery';


    $('#newHonorarioModal').on('hidden.bs.modal', function () {
        // Reset the form inside the modal
        $(this).find('.modal-body')[0].reset();
        console.log("Modal closed and content cleared");
    });