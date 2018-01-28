FROM testcafe/testcafe

ADD test /test/

CMD ["'chromium --no-sandbox'", "/test/github.js"]
