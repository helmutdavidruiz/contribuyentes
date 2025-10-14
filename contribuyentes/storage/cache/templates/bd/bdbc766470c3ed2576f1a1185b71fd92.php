<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* contribuyentes/edit_contribuyente_modal.twig */
class __TwigTemplate_20099acad78becd989f8bf884fe6f798 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"modal fade\" id=\"editContribuyenteModal\" tabindex=\"-1\" aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\">Editar Contribuyente</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
                 <div class=\"modal-body\">
                    
                        
                            <div class=\"form-outline form-white mb-4\">
                               <input type=\"text\" name=\"nombres\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Nombres\" />
                            </div>
                        
                       
                            <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"apellidos\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Apellidos\" />
                            </div>
                       
                           
                  
                    
                     
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"rfc\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"RFC\" />
                            </div>
                      
                        
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"curp\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"CURP\" />
                            </div>
                         
                  
                   
                        
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"telefono\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Telefono\" />
                            </div>
                    
                         
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"email\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Email\" />
                            </div>
                         
                         
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"regimenFiscal\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Regimen Fiscal\" />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"tipoDeclaracion\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Tipo Declaracion\" />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"impuestoObligacion\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Impuesto Obligacion\" />
                            </div>
                    
              </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">
                    <i class=\"bi bi-x-circle me-1\"></i>
                    Cerrar
                </button>
                <button type=\"button\" class=\"btn btn-success save-contribuyente-btn\">
                    <i class=\"bi bi-check-circle me-1\"></i>
                    Guardar
                </button>
            </div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "contribuyentes/edit_contribuyente_modal.twig";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "contribuyentes/edit_contribuyente_modal.twig", "/var/www/resources/views/contribuyentes/edit_contribuyente_modal.twig");
    }
}
