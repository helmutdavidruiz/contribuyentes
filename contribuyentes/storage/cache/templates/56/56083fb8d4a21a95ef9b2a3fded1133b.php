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

/* layout.twig */
class __TwigTemplate_b6327b29e5b7612d7a65ab31ce3f68de extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\" class=\"h-full bg-gray-100\">
    <head>
        <meta charset=\"UTF-8\">
         <meta id=\"csrfName\" name=\"";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "keys", [], "any", false, false, false, 5), "name", [], "any", false, false, false, 5), "html", null, true);
        echo "\" content=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "name", [], "any", false, false, false, 5), "html", null, true);
        echo "\">
        <meta  id=\"csrfValue\" name=\"";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "keys", [], "any", false, false, false, 6), "value", [], "any", false, false, false, 6), "html", null, true);
        echo "\" content=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "value", [], "any", false, false, false, 6), "html", null, true);
        echo "\">

        <title>";
        // line 8
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
        <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\" rel=\"stylesheet\">
        ";
        // line 12
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 15
        echo "
        ";
        // line 16
        $this->displayBlock('javascripts', $context, $blocks);
        // line 19
        echo "    </head>
    <body>
        <div class=\"container\">
            <header class=\"d-flex flex-wrap justify-content-center py-3 mb-4\">
                <a href=\"/\" class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none\">
                    <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/images/logo.png"), "html", null, true);
        echo "\" width=\"64\" height=\"64\" alt=\"Contribbuyentes Logo\" />
                    <span class=\"fs-1 fw-bold\">M&N<span class=\"text-primary\">Asociados</span></span>
                </a>
                <ul class=\"nav nav-pills align-items-center\">
                    <li class=\"nav-item\"><a href=\"/\" class=\"nav-link fw-bold fs-5 active\" aria-current=\"page\">Overview</a></li>
                    <li class=\"nav-item\"><a href=\"/honorarios\" class=\"nav-link fw-bold fs-5\" aria-current=\"page\">Honorarios</a></li>
                    <li class=\"nav-item\"><a href=\"/contribuyentes\" class=\"nav-link fw-bold fs-5\" aria-current=\"page\">Contribuyentes</a></li>
                </ul>
                <div class=\"dropdown user-dropdown-menu\">
                    <a href=\"#\" class=\"h5 text-decoration-none\" id=\"userDropDownMenu\" data-bs-toggle=\"dropdown\"
                       aria-expanded=\"false\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"
                             stroke=\"currentColor\" class=\"icon\">
                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"
                                  d=\"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z\" />
                        </svg>
                        <span>";
        // line 40
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["auth"] ?? null), "name", [], "any", false, false, false, 40), "html", null, true);
        echo "</span>
                    </a>
                    <ul class=\"dropdown-menu\" aria-labelledby=\"userDropDownMenu\">
                        <li>
                            <form action=\"/logout\" method=\"post\">
                                ";
        // line 45
        echo twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "fields", [], "any", false, false, false, 45);
        echo "
                                <button class=\"dropdown-item\" href=\"#\">Log Out</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <div class=\"container\">
            ";
        // line 54
        $this->displayBlock('content', $context, $blocks);
        // line 55
        echo "        </div>
    </body>
</html>
";
    }

    // line 8
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Contribuyentes";
    }

    // line 12
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 13
        echo "            ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
        ";
    }

    // line 16
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 17
        echo "            ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
        ";
    }

    // line 54
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    public function getTemplateName()
    {
        return "layout.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  158 => 54,  151 => 17,  147 => 16,  140 => 13,  136 => 12,  129 => 8,  122 => 55,  120 => 54,  108 => 45,  100 => 40,  81 => 24,  74 => 19,  72 => 16,  69 => 15,  67 => 12,  60 => 8,  53 => 6,  47 => 5,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "layout.twig", "/var/www/resources/views/layout.twig");
    }
}
