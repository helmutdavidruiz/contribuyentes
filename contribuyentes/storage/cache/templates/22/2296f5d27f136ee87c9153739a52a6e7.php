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

/* honorarios/honorario_modal.twig */
class __TwigTemplate_a1227c7c8dbfe7bd441b33b785ae17bc extends Template
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
                    <input type=\"datetime-local\" name=\"fecha\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"Fecha\" />
                </div>
              <div class=\"row\">
               <div class=\"col-md-6\">
                 <div class=\"form-outline form-white mb-4\">
                    <input type=\"number\" name=\"honorario\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"\$ Honorario\" />
                </div>
               </div>
               <div class=\"col-md-6\">
                 <div class=\"form-outline form-white mb-4\">
                    <input type=\"number\" name=\"impuesto\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"\$ Impuesto\" />
                </div>
               </div>
               <div class=\"col-md-6\">
                 <div class=\"form-outline form-white mb-4\">
                    <input type=\"number\" name=\"transferencia\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"\$ Transferencia\" />
                </div>
               </div> 
              </div>
               
               <!--div class=\"form-outline form-white mb-4\">
                    <input type=\"number\" name=\"total\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"\$ Total\" />
                </div-->
              
                <div class=\"form-outline form-white mb-4\">
                    <input type=\"text\" name=\"concepto\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"Concepto\" />
                </div>
                <div class=\"form-outline form-white mb-4\">
                    <input type=\"text\" name=\"observaciones\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"Observaciones\" />
                </div>
                <div class=\"form-outline form-white mb-4\">
                    <select class=\"form-select form-select-lg\" aria-label=\"Contribuyente\" name=\"contribuyente\">
                        <option value=\"\">Selecciona Contribuyente</option>
                        ";
        // line 57
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["contribuyentes"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["contribuyente"]) {
            // line 58
            echo "                            <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contribuyente"], "id", [], "any", false, false, false, 58), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contribuyente"], "identificador", [], "any", false, false, false, 58), "html", null, true);
            echo "</option>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contribuyente'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                    </select>
                </div>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">
                    <i class=\"bi bi-x-circle me-1\"></i>
                    Cerrar
                </button>
                <button type=\"button\" class=\"btn btn-success ";
        // line 68
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 68)) ? ("save") : ("create"));
        echo "-honorario-btn\">
                    <i class=\"bi bi-check-circle me-1\"></i>
                    ";
        // line 70
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 70)) ? ("Save") : ("Create"));
        echo "
                </button>
            </div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "honorarios/honorario_modal.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  130 => 70,  125 => 68,  115 => 60,  104 => 58,  100 => 57,  45 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "honorarios/honorario_modal.twig", "/var/www/resources/views/honorarios/honorario_modal.twig");
    }
}
