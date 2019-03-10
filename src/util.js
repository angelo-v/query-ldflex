export const defaultActivitiesPath = '/public/activities';

export function replaceVariables(template, terms) {
  for (const name in terms)
    template = template.replace(new RegExp(`_:${name}`, 'g'), serializeTerm(terms[name]));
  return template;
}

export function serializeTerm(term) {
  switch (term.termType) {
  case 'NamedNode':
    return `<${term.value}>`;
  case 'Literal':
    // TODO: escaping
    return `"${term.value}"^^<${term.datatype.value}>`;
  // TODO: other types
  default:
    throw new Error(`Unknown term type: ${term.termType}`);
  }
}
