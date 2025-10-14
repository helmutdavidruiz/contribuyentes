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

/* contribuyentes/index.twig */
class __TwigTemplate_c69aec36eb38ccbf4d32924c4fd6cdb4 extends Template
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
        $this->parent = $this->loadTemplate("layout.twig", "contribuyentes/index.twig", 1);
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
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("contribuyentes");
        echo "
";
    }

    // line 8
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Contribuyentes";
    }

    // line 10
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 11
        echo "    <div class=\"contribuyentes container content-body\">
        <div class=\"text-end\">
            <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#newContribuyenteModal\">
                <i class=\"bi bi-plus-circle me-1\"></i>
                Nuevo Contribuyente
            </button>
        </div>
        ";
        // line 18
        $this->loadTemplate("contribuyentes/contribuyente_modal.twig", "contribuyentes/index.twig", 18)->display(twig_array_merge($context, ["modal" => ["title" => "Crear Contribuyente", "id" => "newContribuyenteModal", "isEdit" => false]]));
        // line 19
        echo "        ";
        $this->loadTemplate("contribuyentes/contribuyente_modal.twig", "contribuyentes/index.twig", 19)->display(twig_array_merge($context, ["modal" => ["title" => "Editar Contribuyente", "id" => "editContribuyenteModal", "isEdit" => true]]));
        // line 20
        echo "
        <div>
                <table id=\"contribuyentesTable\">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>RFC</th>
                            <th>CURP</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Regimen Fiscal</th>
                            <th>Tipo Declaracion</th>
                            <th>Impuesto Obligacion</th>
                            <!--th>Crd</th>
                            <th>Act</th-->
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
        return "contribuyentes/index.twig";
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
        return new Source("", "contribuyentes/index.twig", "/var/www/resources/views/contribuyentes/index.twig");
    }
}
