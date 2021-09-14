import { generate, GeneratorConfig } from "@oats-ts/generator";
import { nameProviders, pathProviders } from "@oats-ts/openapi";
import { reader } from "@oats-ts/openapi-reader";
import { writer, prettierStringify } from "@oats-ts/typescript-writer";
import { types } from "@oats-ts/openapi-types-generator";
import { operations } from "@oats-ts/openapi-operations-generator";
import { parameterTypes } from "@oats-ts/openapi-parameter-types-generator";
import { api } from "@oats-ts/openapi-api-generator";

const commonConfig: GeneratorConfig = {
  path: pathProviders.default("src/generated"),
  name: nameProviders.default,
};

generate({
  log: true,
  reader: reader({ path: "schema.json" }),
  generators: [
    types(commonConfig),
    operations(commonConfig),
    parameterTypes(commonConfig),
    api({ ...commonConfig, type: true, class: true, stub: true }),
  ],
  writer: writer({ stringify: prettierStringify({ parser: "typescript" }) }),
});
