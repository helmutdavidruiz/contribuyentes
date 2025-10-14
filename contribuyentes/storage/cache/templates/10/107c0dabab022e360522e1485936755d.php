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

/* contribuyentes/contribuyente_modal.twig */
class __TwigTemplate_527471cd5539e63965bae63c32d4445a extends Template
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
        echo "<div class=\"modal fade\" id=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "id", [], "any", false, false, false, 1), "html", null, true);
        echo "\" tabindex=\"-1\" aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\">";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "title", [], "any", false, false, false, 5), "html", null, true);
        echo "</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
               <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"nombres\" 
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Nombres\" />
                             </div>
                            
                           
                              <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"apellidos\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Apellidos\" />
                             </div>
                            
                        
                         
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"rfc\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"RFC\" />
                             </div>
                            
                           
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"curp\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"CURP\" />
                             </div>
                           
                         
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"telefono\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Telefono\" />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"email\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Email\"  />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"regimenFiscal\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Regimen Fiscal\" />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"tipoDeclaracion\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Tipo Declaracion\" />
                            </div>
                             <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"impuestoObligacion\"
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Impuesto Obligacion\" />
                            </div>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">
                    <i class=\"bi bi-x-circle me-1\"></i>
                    Cerrar
                </button>
                <button type=\"button\" class=\"btn btn-success ";
        // line 69
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 69)) ? ("save") : ("create"));
        echo "-contribuyente-btn\">
                    <i class=\"bi bi-check-circle me-1\"></i>
                    ";
        // line 71
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 71)) ? ("Save") : ("Create"));
        echo "
                </button>
            </div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "contribuyentes/contribuyente_modal.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 71,  112 => 69,  45 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "contribuyentes/contribuyente_modal.twig", "/var/www/resources/views/contribuyentes/contribuyente_modal.twig");
    }
}
