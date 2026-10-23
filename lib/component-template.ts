import { getCurrentInstance, type Component } from 'vue';
import Template from './renderer';

/** Bind the existing template factory for use on any content surface. */
export function useTemplates() {
  const current = getCurrentInstance();
  return {
    template<C>(component: Component, options?: Parameters<typeof Template<C>>[2]) {
      const adapted = { ...options, props: options?.props ?? ((context: C) => ({ context })) };
      return Template<C>(component, undefined, adapted, current);
    },
  };
}

export type VueTemplateOwner = ReturnType<typeof useTemplates>;
