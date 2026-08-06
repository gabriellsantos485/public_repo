(function () {
  "use strict";

  var WEBSITE_ID = "1";
  var CHAVE_STORAGE = "bannercookies_consentimento_" + WEBSITE_ID;
  var NOME_COOKIE = "bannercookies_consentimento_" + WEBSITE_ID;
  var CATEGORIAS = [{"chave": "necessario", "titulo": "Necessários", "descricao": "Essenciais para o funcionamento do site (sessão, segurança, carrinho de compras). Não podem ser desativados.", "obrigatorio": true, "servicos": [{"chave": "localhost", "nome": "localhost", "dominio": "localhost", "cookies": [["sessionid", "/", "localhost"], ["carrinho_id", "/", "localhost"]]}]}, {"chave": "analitico", "titulo": "Estatísticas", "descricao": "Ajudam a entender como os visitantes usam o site (métricas de uso, mapas de calor).", "obrigatorio": false, "servicos": [{"chave": "localhost", "nome": "localhost", "dominio": "localhost", "cookies": [["_ga", "/", "localhost"], ["_gid", "/", "localhost"], ["_hjSessionUser_1234567", "/", "localhost"], ["_clck", "/", "localhost"]]}]}, {"chave": "publicidade", "titulo": "Marketing", "descricao": "Usados para exibir anúncios relevantes e medir campanhas publicitárias.", "obrigatorio": false, "servicos": [{"chave": "localhost", "nome": "localhost", "dominio": "localhost", "cookies": [["_fbp", "/", "localhost"]]}]}];

  var CSS = `.bannercookies {
  --bc-bg: #1f2933;
  --bc-fg: #f5f7fa;
  --bc-muted: #cbd2d9;
  --bc-accent: #2f80ed;
  --bc-accent-fg: #ffffff;
  --bc-surface: #2b3642;
  --bc-border: #3e4c59;
  --bc-radius: 10px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.bannercookies * {
  box-sizing: border-box;
}

.bannercookies-barra {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483000;
  background: var(--bc-bg);
  color: var(--bc-fg);
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.25);
}

.bannercookies-barra p {
  margin: 0;
  max-width: 640px;
  color: var(--bc-muted);
}

.bannercookies-barra strong {
  color: var(--bc-fg);
}

.bannercookies-acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.bannercookies button {
  font: inherit;
  cursor: pointer;
  border-radius: calc(var(--bc-radius) / 1.6);
  padding: 9px 16px;
  border: 1px solid transparent;
  white-space: nowrap;
}

.bannercookies-btn-primaria {
  background: var(--bc-accent);
  color: var(--bc-accent-fg);
}

.bannercookies-btn-secundaria {
  background: transparent;
  color: var(--bc-fg);
  border-color: var(--bc-border);
}

.bannercookies-btn-texto {
  background: transparent;
  color: var(--bc-muted);
  text-decoration: underline;
  padding: 9px 4px;
}

.bannercookies-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483001;
  background: rgba(15, 20, 25, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.bannercookies-painel {
  background: var(--bc-surface);
  color: var(--bc-fg);
  border-radius: var(--bc-radius);
  max-width: 560px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--bc-border);
}

.bannercookies-painel h2 {
  margin: 0 0 12px;
  font-size: 18px;
}

.bannercookies-categoria {
  border-top: 1px solid var(--bc-border);
  padding: 14px 0;
}

.bannercookies-categoria:first-of-type {
  border-top: none;
}

.bannercookies-categoria-cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.bannercookies-categoria-cabecalho h3 {
  margin: 0;
  font-size: 15px;
}

.bannercookies-categoria p {
  margin: 6px 0 0;
  color: var(--bc-muted);
  font-size: 13px;
}

.bannercookies-servicos {
  margin: 8px 0 0;
  padding-left: 18px;
  color: var(--bc-muted);
  font-size: 12px;
}

.bannercookies-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
}

.bannercookies-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.bannercookies-switch-trilho {
  position: absolute;
  inset: 0;
  background: var(--bc-border);
  border-radius: 999px;
  transition: background 0.15s;
}

.bannercookies-switch-trilho::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: 3px;
  top: 3px;
  background: white;
  border-radius: 50%;
  transition: transform 0.15s;
}

.bannercookies-switch input:checked + .bannercookies-switch-trilho {
  background: var(--bc-accent);
}

.bannercookies-switch input:checked + .bannercookies-switch-trilho::before {
  transform: translateX(18px);
}

.bannercookies-switch input:disabled + .bannercookies-switch-trilho {
  opacity: 0.6;
}

.bannercookies-painel-rodape {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
`;

  function ativarScriptsPermitidos(categoriasPermitidas) {
  document.querySelectorAll('script[type="text/plain"][data-categoria]').forEach(function (script) {
    if (script.dataset.ativado === "1") return;
    if (!categoriasPermitidas.includes(script.getAttribute('data-categoria'))) return;

    var novo = document.createElement('script');
    for (var i = 0; i < script.attributes.length; i++) {
      var attr = script.attributes[i];
      if (attr.name === 'type') continue;
      if (attr.name === 'data-src') { novo.setAttribute('src', attr.value); continue; }
      novo.setAttribute(attr.name, attr.value);
    }
    novo.type = 'text/javascript';
    if (script.textContent && !script.getAttribute('data-src')) {
      novo.textContent = script.textContent;
    }
    script.dataset.ativado = "1";
    script.replaceWith(novo);
  });
}

  function lerConsentimentoSalvo() {
    try {
      var bruto = localStorage.getItem(CHAVE_STORAGE);
      return bruto ? JSON.parse(bruto) : null;
    } catch (e) {
      return null;
    }
  }

  function salvarConsentimento(decisao) {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(decisao));
    } catch (e) {}
    var expira = new Date();
    expira.setFullYear(expira.getFullYear() + 1);
    document.cookie =
      NOME_COOKIE + "=1; expires=" + expira.toUTCString() + "; path=/; SameSite=Lax";
  }

  function categoriasPermitidas(decisao) {
    var permitidas = [];
    CATEGORIAS.forEach(function (cat) {
      if (cat.obrigatorio || decisao[cat.chave]) permitidas.push(cat.chave);
    });
    return permitidas;
  }

  function aplicarDecisao(decisao) {
    ativarScriptsPermitidos(categoriasPermitidas(decisao));
  }

  function injetarEstilo() {
    if (document.getElementById("bannercookies-estilo")) return;
    var style = document.createElement("style");
    style.id = "bannercookies-estilo";
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function elemento(tag, atributos, filhos) {
    var el = document.createElement(tag);
    Object.keys(atributos || {}).forEach(function (chave) {
      if (chave === "texto") {
        el.textContent = atributos[chave];
      } else {
        el.setAttribute(chave, atributos[chave]);
      }
    });
    (filhos || []).forEach(function (filho) {
      el.appendChild(filho);
    });
    return el;
  }

  function removerNo(id) {
    var no = document.getElementById(id);
    if (no) no.remove();
  }

  function montarPainel(decisaoAtual, aoSalvar) {
    removerNo("bannercookies-overlay");

    var toggles = {};
    var categoriasEl = CATEGORIAS.map(function (cat) {
      var marcado = cat.obrigatorio || !!decisaoAtual[cat.chave];
      var input = elemento("input", { type: "checkbox" });
      input.checked = marcado;
      input.disabled = cat.obrigatorio;
      toggles[cat.chave] = input;

      var trilho = elemento("span", { class: "bannercookies-switch-trilho" });
      var switchLabel = elemento("label", { class: "bannercookies-switch" }, [
        input,
        trilho,
      ]);

      var servicos =
        cat.servicos && cat.servicos.length
          ? elemento(
              "ul",
              { class: "bannercookies-servicos" },
              cat.servicos.map(function (s) {
                return elemento("li", {
                  texto: s.nome + " (" + s.cookies.length + " cookie" + (s.cookies.length === 1 ? "" : "s") + ")",
                });
              })
            )
          : null;

      var filhosCategoria = [
        elemento("div", { class: "bannercookies-categoria-cabecalho" }, [
          elemento("h3", { texto: cat.titulo }),
          switchLabel,
        ]),
        elemento("p", { texto: cat.descricao }),
      ];
      if (servicos) filhosCategoria.push(servicos);

      return elemento("div", { class: "bannercookies-categoria" }, filhosCategoria);
    });

    function coletarDecisao() {
      var decisao = {};
      Object.keys(toggles).forEach(function (chave) {
        decisao[chave] = toggles[chave].checked;
      });
      return decisao;
    }

    var btnSalvar = elemento("button", {
      class: "bannercookies-btn-primaria",
      texto: "Salvar preferências",
    });
    btnSalvar.addEventListener("click", function () {
      aoSalvar(coletarDecisao());
      removerNo("bannercookies-overlay");
    });

    var btnAceitarTodos = elemento("button", {
      class: "bannercookies-btn-secundaria",
      texto: "Aceitar todos",
    });
    btnAceitarTodos.addEventListener("click", function () {
      var decisao = {};
      CATEGORIAS.forEach(function (cat) {
        decisao[cat.chave] = true;
      });
      aoSalvar(decisao);
      removerNo("bannercookies-overlay");
    });

    var painel = elemento("div", { class: "bannercookies-painel" }, [
      elemento("h2", { texto: "Preferências de cookies" }),
      elemento("div", {}, categoriasEl),
      elemento("div", { class: "bannercookies-painel-rodape" }, [
        btnAceitarTodos,
        btnSalvar,
      ]),
    ]);

    var overlay = elemento(
      "div",
      { id: "bannercookies-overlay", class: "bannercookies bannercookies-overlay" },
      [painel]
    );
    overlay.addEventListener("click", function (evento) {
      if (evento.target === overlay) removerNo("bannercookies-overlay");
    });

    document.body.appendChild(overlay);
  }

  function montarBanner() {
    removerNo("bannercookies-barra");

    var texto = elemento("p", {}, [
      document.createTextNode(
        "Usamos cookies para o funcionamento do site e, com sua permissão, para "
      ),
      elemento("strong", { texto: "estatísticas e marketing" }),
      document.createTextNode(". Você pode personalizar suas escolhas a qualquer momento."),
    ]);

    var btnRejeitar = elemento("button", {
      class: "bannercookies-btn-secundaria",
      texto: "Rejeitar não essenciais",
    });
    btnRejeitar.addEventListener("click", function () {
      salvarConsentimento({});
      aplicarDecisao({});
      removerNo("bannercookies-barra");
    });

    var btnPersonalizar = elemento("button", {
      class: "bannercookies-btn-texto",
      texto: "Personalizar",
    });
    btnPersonalizar.addEventListener("click", function () {
      montarPainel(lerConsentimentoSalvo() || {}, function (decisao) {
        salvarConsentimento(decisao);
        aplicarDecisao(decisao);
        removerNo("bannercookies-barra");
      });
    });

    var btnAceitar = elemento("button", {
      class: "bannercookies-btn-primaria",
      texto: "Aceitar todos",
    });
    btnAceitar.addEventListener("click", function () {
      var decisao = {};
      CATEGORIAS.forEach(function (cat) {
        decisao[cat.chave] = true;
      });
      salvarConsentimento(decisao);
      aplicarDecisao(decisao);
      removerNo("bannercookies-barra");
    });

    var barra = elemento(
      "div",
      { id: "bannercookies-barra", class: "bannercookies bannercookies-barra" },
      [
        texto,
        elemento("div", { class: "bannercookies-acoes" }, [
          btnPersonalizar,
          btnRejeitar,
          btnAceitar,
        ]),
      ]
    );

    document.body.appendChild(barra);
  }

  function iniciar() {
    injetarEstilo();
    var decisaoSalva = lerConsentimentoSalvo();
    if (decisaoSalva) {
      aplicarDecisao(decisaoSalva);
      return;
    }
    aplicarDecisao({});
    montarBanner();
  }

  window.abrirConfiguracoesCookies = function () {
    injetarEstilo();
    montarPainel(lerConsentimentoSalvo() || {}, function (decisao) {
      salvarConsentimento(decisao);
      aplicarDecisao(decisao);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();