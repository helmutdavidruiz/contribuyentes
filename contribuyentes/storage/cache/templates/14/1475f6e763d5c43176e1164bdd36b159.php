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

/* honorarios/index.twig */
class __TwigTemplate_783b48973c14997ebc6480f77850cfe8 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'javascripts' => [$this, 'block_javascripts'],
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("layout.twig", "honorarios/index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    ";
        // line 5
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("honorarios");
        echo "
";
    }

    // line 8
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Honorarios";
    }

    // line 10
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 11
        echo "    <div class=\"honorarios container content-body\">
        <div class=\"text-end mb-4\">
            <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#newHonorarioModal\">
                <i class=\"bi bi-plus-circle me-1\"></i>
                Nuevo Honorario
            </button>
        </div>
        ";
        // line 18
        $this->loadTemplate("honorarios/honorario_modal.twig", "honorarios/index.twig", 18)->display(twig_array_merge($context, ["modal" => ["title" => "Crear Honorario", "id" => "newHonorarioModal", "isEdit" => false]]));
        // line 19
        echo "        ";
        $this->loadTemplate("honorarios/honorario_modal.twig", "honorarios/index.twig", 19)->display(twig_array_merge($context, ["modal" => ["title" => "Editar Honorario", "id" => "editHonorarioModal", "isEdit" => true]]));
        // line 20
        echo "        <div>
            <table id=\"honorariosTable\">
                <thead>
                    <tr>
                        <th>Contribuyente</th> 
                        <th>Fecha</th>
                        <th>Honorario</th>
                        <th>Impuesto</th>
                        <th>Transferencia</th>
                        <th>Total</th>
                        <th>Concepto</th>
                        <th>Observaciones</th> 
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
";
    }

    public function getTemplateName()
    {
        return "honorarios/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 20,  85 => 19,  83 => 18,  74 => 11,  70 => 10,  63 => 8,  57 => 5,  52 => 4,  48 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "honorarios/index.twig", "/var/www/resources/views/honorarios/index.twig");
    }
}
