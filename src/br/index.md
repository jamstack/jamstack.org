---
title: JAM Stack
layout: layouts/main.jade
---

<p class="intro">

  O stack JAM é um novo jeito de criar websites e apps rápidos, seguros e simples de lidar.
</p>

JAM é um acrônimo para JavaScript, APIs e Markup. Trata-se do ambiente para criação de sites e apps que cresce mais rápido: Nada de servidores, hospede seu front-end num CDN e use APIs para quaisquer partes móveis.

Quando o stack LAMP começou a ganhar destaque no final dos anos 90, ele cresceu a partir de um conjunto de restrições que não existem mais. Naquela época, Browsers eram leitores de documentos primitivos, e praticamente tudo que fosse dinâmico, social ou interativo tinha que ser feito no servidor. A única forma de hospedagem com custos acessíveis era hospedagem compartilhada.
A publicação de sites consistia no upload de arquivos por FTP. Controle de versão era praticamente ausente do dia-a-dia do fluxo de trabalho dos desenvolvedores web.

Hoje os browsers são o sistema operacional da web e são capazes de rodar aplicações complexas inteiramente do lado do cliente. Eles são capazes de consumir e interagir com um número cada vez maior de APIs e serviços em vários domínios e infra-estruturas.
CDSn (Content Delivery Networks, ou redes distribuição de conteúdo) deixaram de ser um luxo que apenas grandes empresas podiam pagar, para se tornarem o caminho natural para reduzir a demora até o primeiro byte em sites e apps de todos os tamanhos. Modelos de deploy não são mais uploads manuais trabalhosos, mas processos automatizados acionados por sistemas de controle de versão onipresentes.

O JAM stack é o ambiente dessa nova realidade. Ao invés de enviar por FTP o código back-end para um servidor compartilhado, nós usamos git e, dando um push, nosso código é instantâneamente compilado e distribuído em CDNs ao redor do mundo. Ao invés de depender de um banco de dados para cada request servido, nós usamos build tools para preparar sites inteiros e aplicativos prontos para rodar diretamente no browser. Ao invés de misturar persistência, geração de HTML, transações com cartões de crédito, autenticação etc num só lugar, nós separamos essas responsabilidades e consumimos APIs bem definidas em nosso front-end.

O stack JAM usa linguagens de marcação como HTML, CSS e Markdown para formatar e dar estilo ao conteúdo, JavaScript no lado do cliente para torná-lo interativo e cativante e APIs para adicionar persistência, interações com o mundo real, comentários, carrinhos de compra, sincronismo em tempo real e assim por diante.

Browsers são o novo sistema operacional. Servidores são abstraídos por CDNs e APIs. Sites são ou livres de banco de dados e gerados à priori, ou consomem serviços de banco de dados diretamente do browser. JavaScript é responsável por qualquer tipo de programação dinâmica durante o ciclo de request/response e roda inteiramente no cliente.

Spread the JAM!
