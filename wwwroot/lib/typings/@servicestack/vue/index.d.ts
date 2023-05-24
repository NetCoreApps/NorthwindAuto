import { ApiResult } from '@servicestack/client';
import type { App } from 'vue';
import type { Component } from 'vue';
import type { ComputedOptions } from 'vue';
import type { ComputedRef } from 'vue';
import { JsonServiceClient } from '@servicestack/client';
import type { MethodOptions } from 'vue';
import type { Ref } from 'vue';
import type { UnwrapRef } from 'vue';

declare const a: {
    blue: string;
    purple: string;
    red: string;
    green: string;
    sky: string;
    cyan: string;
    indigo: string;
};

declare interface AdminDatabaseInfo {
    queryLimit: number;
    databases: DatabaseInfo[];
    meta: {
        [index: string]: string;
    };
}

declare interface AdminRedisInfo {
    queryLimit: number;
    databases: number[];
    modifiableConnection?: boolean;
    endpoint: RedisEndpointInfo;
    meta: {
        [index: string]: string;
    };
}

declare interface AdminUi {
    css: ApiCss;
}

declare interface AdminUsersInfo {
    accessRole: string;
    enabled: string[];
    userAuth: MetadataType;
    allRoles: string[];
    allPermissions: string[];
    queryUserAuthProperties: string[];
    queryMediaRules: MediaRule[];
    formLayout: InputInfo[];
    css: ApiCss;
    meta: {
        [index: string]: string;
    };
}

declare interface ApiCss {
    form: string;
    fieldset: string;
    field: string;
}

declare interface ApiFormat {
    locale?: string;
    assumeUtc?: boolean;
    number?: FormatInfo;
    date?: FormatInfo;
}

/** Resolve Request DTO {MetadataOperationType} by name */
declare function apiOf(name: string): {
    request: {
        name: string;
        namespace?: string | undefined;
        genericArgs?: string[] | undefined;
        inherits?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        } | undefined;
        implements?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        displayType?: string | undefined;
        description?: string | undefined;
        notes?: string | undefined;
        icon?: {
            svg?: string | undefined;
            uri?: string | undefined;
            alt?: string | undefined;
            cls?: string | undefined;
        } | undefined;
        isNested?: boolean | undefined;
        isEnum?: boolean | undefined;
        isEnumInt?: boolean | undefined;
        isInterface?: boolean | undefined;
        isAbstract?: boolean | undefined;
        dataContract?: {
            name: string;
            namespace: string;
        } | undefined;
        properties?: {
            name: string;
            type: string;
            namespace?: string | undefined;
            isValueType?: boolean | undefined;
            isEnum?: boolean | undefined;
            isPrimaryKey?: boolean | undefined;
            genericArgs?: string[] | undefined;
            value?: string | undefined;
            description?: string | undefined;
            dataMember?: {
                name: string;
                order?: number | undefined;
                isRequired?: boolean | undefined;
                emitDefaultValue?: boolean | undefined;
            } | undefined;
            readOnly?: boolean | undefined;
            paramType?: string | undefined;
            displayType?: string | undefined;
            isRequired?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableMin?: number | undefined;
            allowableMax?: number | undefined;
            attributes?: {
                name: string;
                constructorArgs: any[];
                args: any[];
            }[] | undefined;
            uploadTo?: string | undefined;
            input?: {
                id: string;
                name?: string | undefined;
                type: string;
                value?: string | undefined;
                placeholder?: string | undefined;
                help?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
                size?: string | undefined;
                pattern?: string | undefined;
                readOnly?: boolean | undefined;
                required?: boolean | undefined;
                disabled?: boolean | undefined;
                autocomplete?: string | undefined;
                autofocus?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                step?: number | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                accept?: string | undefined;
                capture?: string | undefined;
                multiple?: boolean | undefined;
                allowableValues?: string[] | undefined;
                allowableEntries?: {
                    key: string;
                    value: string;
                }[] | undefined;
                options?: string | undefined;
                ignore?: boolean | undefined;
                css?: {
                    field: string;
                    input: string;
                    label: string;
                } | undefined;
                meta?: {
                    [index: string]: string;
                } | undefined;
            } | undefined;
            format?: {
                method: string;
                options?: string | undefined;
                locale?: string | undefined;
            } | undefined;
            ref?: {
                model: string;
                selfId: string;
                refId: string;
                refLabel: string;
            } | undefined;
        }[] | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        innerTypes?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        enumNames?: string[] | undefined;
        enumValues?: string[] | undefined;
        enumMemberValues?: string[] | undefined;
        enumDescriptions?: string[] | undefined;
        meta?: {
            [index: string]: string;
        } | undefined;
    };
    response: {
        name: string;
        namespace?: string | undefined;
        genericArgs?: string[] | undefined;
        inherits?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        } | undefined;
        implements?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        displayType?: string | undefined;
        description?: string | undefined;
        notes?: string | undefined;
        icon?: {
            svg?: string | undefined;
            uri?: string | undefined;
            alt?: string | undefined;
            cls?: string | undefined;
        } | undefined;
        isNested?: boolean | undefined;
        isEnum?: boolean | undefined;
        isEnumInt?: boolean | undefined;
        isInterface?: boolean | undefined;
        isAbstract?: boolean | undefined;
        dataContract?: {
            name: string;
            namespace: string;
        } | undefined;
        properties?: {
            name: string;
            type: string;
            namespace?: string | undefined;
            isValueType?: boolean | undefined;
            isEnum?: boolean | undefined;
            isPrimaryKey?: boolean | undefined;
            genericArgs?: string[] | undefined;
            value?: string | undefined;
            description?: string | undefined;
            dataMember?: {
                name: string;
                order?: number | undefined;
                isRequired?: boolean | undefined;
                emitDefaultValue?: boolean | undefined;
            } | undefined;
            readOnly?: boolean | undefined;
            paramType?: string | undefined;
            displayType?: string | undefined;
            isRequired?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableMin?: number | undefined;
            allowableMax?: number | undefined;
            attributes?: {
                name: string;
                constructorArgs: any[];
                args: any[];
            }[] | undefined;
            uploadTo?: string | undefined;
            input?: {
                id: string;
                name?: string | undefined;
                type: string;
                value?: string | undefined;
                placeholder?: string | undefined;
                help?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
                size?: string | undefined;
                pattern?: string | undefined;
                readOnly?: boolean | undefined;
                required?: boolean | undefined;
                disabled?: boolean | undefined;
                autocomplete?: string | undefined;
                autofocus?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                step?: number | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                accept?: string | undefined;
                capture?: string | undefined;
                multiple?: boolean | undefined;
                allowableValues?: string[] | undefined;
                allowableEntries?: {
                    key: string;
                    value: string;
                }[] | undefined;
                options?: string | undefined;
                ignore?: boolean | undefined;
                css?: {
                    field: string;
                    input: string;
                    label: string;
                } | undefined;
                meta?: {
                    [index: string]: string;
                } | undefined;
            } | undefined;
            format?: {
                method: string;
                options?: string | undefined;
                locale?: string | undefined;
            } | undefined;
            ref?: {
                model: string;
                selfId: string;
                refId: string;
                refLabel: string;
            } | undefined;
        }[] | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        innerTypes?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        enumNames?: string[] | undefined;
        enumValues?: string[] | undefined;
        enumMemberValues?: string[] | undefined;
        enumDescriptions?: string[] | undefined;
        meta?: {
            [index: string]: string;
        } | undefined;
    };
    actions: string[];
    returnsVoid?: boolean | undefined;
    method: string;
    returnType: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    routes: {
        path: string;
        verbs: string;
        notes: string;
        summary: string;
    }[];
    dataModel: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    viewModel: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    requiresAuth?: boolean | undefined;
    requiredRoles: string[];
    requiresAnyRole: string[];
    requiredPermissions: string[];
    requiresAnyPermission: string[];
    tags: string[];
    ui: {
        locodeCss: {
            form: string;
            fieldset: string;
            field: string;
        };
        explorerCss: {
            form: string;
            fieldset: string;
            field: string;
        };
        formLayout: {
            id: string;
            name?: string | undefined;
            type: string;
            value?: string | undefined;
            placeholder?: string | undefined;
            help?: string | undefined;
            label?: string | undefined;
            title?: string | undefined;
            size?: string | undefined;
            pattern?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            disabled?: boolean | undefined;
            autocomplete?: string | undefined;
            autofocus?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            step?: number | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            accept?: string | undefined;
            capture?: string | undefined;
            multiple?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableEntries?: {
                key: string;
                value: string;
            }[] | undefined;
            options?: string | undefined;
            ignore?: boolean | undefined;
            css?: {
                field: string;
                input: string;
                label: string;
            } | undefined;
            meta?: {
                [index: string]: string;
            } | undefined;
        }[];
        meta: {
            [index: string]: string;
        };
    };
} | null | undefined;

declare interface ApiRequest {
    [k: string]: any;
    getTypeName(): string;
    getMethod(): string;
    createResponse(): any;
}

declare interface ApiResponse {
    response?: any;
    error?: ResponseStatus;
    get completed(): boolean;
    get failed(): boolean;
    get succeeded(): boolean;
    get errorMessage(): string;
    get errorCode(): string;
    get errors(): ResponseError[];
    get errorSummary(): string;
}

declare interface ApiResult_2<TResponse> extends ApiResponse {
    response?: TResponse;
    error?: ResponseStatus;
    get completed(): boolean;
    get failed(): boolean;
    get succeeded(): boolean;
    get errorMessage(): string;
    get errorCode(): string;
    get errors(): ResponseError[];
    get errorSummary(): string;
    fieldError(fieldName: string): ResponseError;
    fieldErrorMessage(fieldName: string): string;
    hasFieldError(fieldName: string): boolean;
    showSummary(exceptFields?: string[]): boolean;
    summaryMessage(exceptFields?: string[]): string;
    addFieldError(fieldName: string, message: string, errorCode?: string): void;
}

/** Capture AutoQuery APIs */
declare class Apis {
    Query?: MetadataOperationType;
    QueryInto?: MetadataOperationType;
    Create?: MetadataOperationType;
    Update?: MetadataOperationType;
    Patch?: MetadataOperationType;
    Delete?: MetadataOperationType;
    get AnyQuery(): MetadataOperationType | undefined;
    get AnyUpdate(): MetadataOperationType | undefined;
    toArray(): MetadataOperationType[];
    get empty(): boolean;
    add(op: MetadataOperationType): void;
    static from(ops: MetadataOperationType[]): Apis;
    static forType(type?: string | null, metaTypes?: MetadataTypes | null): Apis;
}

declare type ApiState = {
    unRefs: (o: any) => any;
    setRef: ($ref: Ref<any>, $item: any) => void;
    setError: ({ message, errorCode, fieldName, errors }: IResponseStatus) => ResponseStatus;
    addFieldError: ({ fieldName, message, errorCode }: IResponseError) => void;
    loading: Ref<boolean>;
    error: Ref<any>;
    api: <TResponse>(request: IReturn<TResponse> | ApiRequest, args?: any, method?: string) => Promise<ApiResult_2<TResponse>>;
    apiVoid: (request: IReturnVoid | ApiRequest, args?: any, method?: string) => Promise<ApiResult_2<EmptyResponse>>;
    apiForm: <TResponse>(request: ApiRequest | IReturn<TResponse>, body: FormData, args?: any, method?: string) => Promise<ApiResult_2<TResponse>>;
    apiFormVoid: (request: IReturnVoid | ApiRequest, body: FormData, args?: any, method?: string) => Promise<ApiResult_2<EmptyResponse>>;
    swr: <TResponse>(request: IReturn<TResponse> | ApiRequest, fn: (r: ApiResult_2<TResponse>) => void, args?: any, method?: string) => Promise<ApiResult_2<TResponse>>;
    swrEffect: <TResponse>(requestFn: () => IReturn<TResponse> | ApiRequest, options?: {
        args?: any;
        method?: string;
        delayMs?: number;
    }) => Ref<ApiResult_2<UnwrapRef<TResponse>>>;
};

declare interface ApiUiInfo {
    locodeCss: ApiCss;
    explorerCss: ApiCss;
    formLayout: InputInfo[];
    meta: {
        [index: string]: string;
    };
}

/** Format an API Response value */
declare function apiValueFmt(o: any, format?: FormatInfo | null, attrs?: any): any;

declare interface AppInfo {
    baseUrl: string;
    serviceStackVersion: string;
    serviceName: string;
    apiVersion: string;
    serviceDescription: string;
    serviceIconUrl: string;
    brandUrl: string;
    brandImageUrl: string;
    textColor: string;
    linkColor: string;
    backgroundColor: string;
    backgroundImageUrl: string;
    iconUrl: string;
    jsTextCase: string;
    meta: {
        [index: string]: string;
    };
}

declare interface AppMetadata {
    date: string;
    app: AppInfo;
    ui: UiInfo;
    config: ConfigInfo;
    contentTypeFormats: {
        [index: string]: string;
    };
    httpHandlers: {
        [index: string]: string;
    };
    plugins: PluginInfo;
    customPlugins: {
        [index: string]: CustomPluginInfo;
    };
    api: MetadataTypes;
    meta: {
        [index: string]: string;
    };
}

declare interface AppTags {
    default: string;
    other: string;
}

/** Convert string dictionary to [{ key:string, value:string }] */
declare function asKvps(options?: {
    [k: string]: string;
} | null): KeyValuePair<string, string>[] | undefined;

declare function asOptions(all: string[], exclude?: null | string | string[]): {
    [k: string]: boolean;
};

/** Resolve Absolute URL to use for relative paths */
declare function assetsPathResolver(src?: string): string | undefined;

declare function asStrings(o?: string | string[] | null): string[];

/** Format File attachment URL as an Attachment */
declare function attachment(url: string, attrs?: any): string;

declare type AuthenticateResponse = {
    userId?: string;
    sessionId?: string;
    userName?: string;
    displayName?: string;
    referrerUrl?: string;
    bearerToken?: string;
    refreshToken?: string;
    profileUrl?: string;
    roles?: string[];
    permissions?: string[];
};

declare interface AuthInfo {
    hasAuthSecret?: boolean;
    hasAuthRepository?: boolean;
    includesRoles?: boolean;
    includesOAuthTokens?: boolean;
    htmlRedirect: string;
    authProviders: MetaAuthProvider[];
    roleLinks: {
        [index: string]: LinkInfo[];
    };
    serviceRoutes: {
        [index: string]: string[];
    };
    meta: {
        [index: string]: string;
    };
}

declare interface AutoQueryConvention {
    name: string;
    value: string;
    types: string;
    valueType: string;
}

declare type AutoQueryGridDefaults = {
    deny?: GridAllowOptions[];
    hide?: GridShowOptions[];
    toolbarButtonClass?: string;
    tableStyle?: TableStyleOptions;
    take?: number;
    maxFieldLength?: number;
};

declare interface AutoQueryInfo {
    maxLimit?: number;
    untypedQueries?: boolean;
    rawSqlFilters?: boolean;
    autoQueryViewer?: boolean;
    async?: boolean;
    orderByPrimaryKey?: boolean;
    crudEvents?: boolean;
    crudEventsServices?: boolean;
    accessRole: string;
    namedConnection: string;
    viewerConventions: AutoQueryConvention[];
    meta: {
        [index: string]: string;
    };
}

/** Format number in human readable disk size */
declare function bytes(val: number, attrs?: any): string;

/** Check if Auth Session has access to API */
declare function canAccess(op?: MetadataOperationType | null): boolean;

/** Check if path or URI is of a supported web image type */
declare function canPreview(path: string): boolean;

declare const card: {
    panelClass: string;
    formClass: string;
    headingClass: string;
    subHeadingClass: string;
};

/** Delete AppMetadata and remove from localStorage */
declare function clearMetadata(): void;

declare interface ConfigInfo {
    debugMode?: boolean;
    meta: {
        [index: string]: string;
    };
}

declare function copyText(text: string): void;

declare function createDebounce(fn: Function, delayMs?: number): (...args: any[]) => void;

/** Create a Request DTO instance for Request DTO name or MetadataOperationType */
declare function createDto(requestDto: string | MetadataOperationType, obj?: any): any;

/** Create Form Layout's {InputProp[]} from {MetadataType} */
declare function createFormLayout(metaType?: MetadataType | null): InputProp[];

declare namespace css {
    export {
        a,
        input,
        card,
        slideOver,
        modal,
        form,
        grid,
        dummy
    }
}
export { css }

/** Format number as Currency */
declare function currency(val: number, attrs?: any): string;

declare interface CustomPluginInfo {
    accessRole: string;
    serviceRoutes: {
        [index: string]: string[];
    };
    enabled: string[];
    meta: {
        [index: string]: string;
    };
}

declare interface DatabaseInfo {
    alias: string;
    name: string;
    schemas: SchemaInfo[];
}

/** Format Date into required input[type=date] format */
declare function dateInputFormat(d: Date): string;

declare const _default: {
    install(app: App): void;
    component(name: string, component?: Component): Component<any, any, any, ComputedOptions, MethodOptions> | null;
};
export default _default;

declare type DefaultFormats = ApiFormat & {
    maxFieldLength?: number;
    maxNestedFields?: number;
    maxNestedFieldLength?: number;
};

declare const dummy: {
    colspans: string;
};

declare interface EmptyResponse {
    responseStatus?: ResponseStatus;
}

/** Encode SVG XML for usage in Data URIs */
declare function encodeSvg(s: string): string;

/** Format Enum Flags into expanded enum strings */
declare function enumFlags(value: number, options: any): string;

declare function enumFlagsConverter(type: string): (x: number | any) => any;

/** Resolve Enum entries for Enum Type by name */
declare function enumOptions(name: string): {
    [name: string]: string;
} | null;

declare function expandEnumFlags(value: number, options: any): string[];

declare interface ExplorerUi {
    css: ApiCss;
    tags: AppTags;
}

/** Resolve SVG URI for file extension */
declare function extSrc(ext: string): string | null;

/** Resolve SVG XML for file extension */
declare function extSvg(ext: string): string | null;

/** Resolve fallback URL to use if primary URL fails */
declare function fallbackPathResolver(src?: string): string | undefined;

declare interface FieldCss {
    field: string;
    input: string;
    label: string;
}

/** Resolve image preview URL for file */
declare function fileImageUri(file: any | {
    name: string;
}): string | null;

/** Resolve the Icon URI to use for file */
declare function filePathUri(path?: string): string | null;

declare interface FilesUploadInfo {
    basePath: string;
    locations: FilesUploadLocation[];
    meta: {
        [index: string]: string;
    };
}

declare interface FilesUploadLocation {
    name: string;
    readAccessRole: string;
    writeAccessRole: string;
    allowExtensions: string[];
    allowOperations: string;
    maxFileCount?: number;
    minFileBytes?: number;
    maxFileBytes?: number;
}

/** Filter Apis by different filtering conditions */
declare function findApis({ dataModel }: {
    dataModel?: string | MetadataType;
}): {
    request: {
        name: string;
        namespace?: string | undefined;
        genericArgs?: string[] | undefined;
        inherits?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        } | undefined;
        implements?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        displayType?: string | undefined;
        description?: string | undefined;
        notes?: string | undefined;
        icon?: {
            svg?: string | undefined;
            uri?: string | undefined;
            alt?: string | undefined;
            cls?: string | undefined;
        } | undefined;
        isNested?: boolean | undefined;
        isEnum?: boolean | undefined;
        isEnumInt?: boolean | undefined;
        isInterface?: boolean | undefined;
        isAbstract?: boolean | undefined;
        dataContract?: {
            name: string;
            namespace: string;
        } | undefined;
        properties?: {
            name: string;
            type: string;
            namespace?: string | undefined;
            isValueType?: boolean | undefined;
            isEnum?: boolean | undefined;
            isPrimaryKey?: boolean | undefined;
            genericArgs?: string[] | undefined;
            value?: string | undefined;
            description?: string | undefined;
            dataMember?: {
                name: string;
                order?: number | undefined;
                isRequired?: boolean | undefined;
                emitDefaultValue?: boolean | undefined;
            } | undefined;
            readOnly?: boolean | undefined;
            paramType?: string | undefined;
            displayType?: string | undefined;
            isRequired?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableMin?: number | undefined;
            allowableMax?: number | undefined;
            attributes?: {
                name: string;
                constructorArgs: any[];
                args: any[];
            }[] | undefined;
            uploadTo?: string | undefined;
            input?: {
                id: string;
                name?: string | undefined;
                type: string;
                value?: string | undefined;
                placeholder?: string | undefined;
                help?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
                size?: string | undefined;
                pattern?: string | undefined;
                readOnly?: boolean | undefined;
                required?: boolean | undefined;
                disabled?: boolean | undefined;
                autocomplete?: string | undefined;
                autofocus?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                step?: number | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                accept?: string | undefined;
                capture?: string | undefined;
                multiple?: boolean | undefined;
                allowableValues?: string[] | undefined;
                allowableEntries?: {
                    key: string;
                    value: string;
                }[] | undefined;
                options?: string | undefined;
                ignore?: boolean | undefined;
                css?: {
                    field: string;
                    input: string;
                    label: string;
                } | undefined;
                meta?: {
                    [index: string]: string;
                } | undefined;
            } | undefined;
            format?: {
                method: string;
                options?: string | undefined;
                locale?: string | undefined;
            } | undefined;
            ref?: {
                model: string;
                selfId: string;
                refId: string;
                refLabel: string;
            } | undefined;
        }[] | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        innerTypes?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        enumNames?: string[] | undefined;
        enumValues?: string[] | undefined;
        enumMemberValues?: string[] | undefined;
        enumDescriptions?: string[] | undefined;
        meta?: {
            [index: string]: string;
        } | undefined;
    };
    response: {
        name: string;
        namespace?: string | undefined;
        genericArgs?: string[] | undefined;
        inherits?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        } | undefined;
        implements?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        displayType?: string | undefined;
        description?: string | undefined;
        notes?: string | undefined;
        icon?: {
            svg?: string | undefined;
            uri?: string | undefined;
            alt?: string | undefined;
            cls?: string | undefined;
        } | undefined;
        isNested?: boolean | undefined;
        isEnum?: boolean | undefined;
        isEnumInt?: boolean | undefined;
        isInterface?: boolean | undefined;
        isAbstract?: boolean | undefined;
        dataContract?: {
            name: string;
            namespace: string;
        } | undefined;
        properties?: {
            name: string;
            type: string;
            namespace?: string | undefined;
            isValueType?: boolean | undefined;
            isEnum?: boolean | undefined;
            isPrimaryKey?: boolean | undefined;
            genericArgs?: string[] | undefined;
            value?: string | undefined;
            description?: string | undefined;
            dataMember?: {
                name: string;
                order?: number | undefined;
                isRequired?: boolean | undefined;
                emitDefaultValue?: boolean | undefined;
            } | undefined;
            readOnly?: boolean | undefined;
            paramType?: string | undefined;
            displayType?: string | undefined;
            isRequired?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableMin?: number | undefined;
            allowableMax?: number | undefined;
            attributes?: {
                name: string;
                constructorArgs: any[];
                args: any[];
            }[] | undefined;
            uploadTo?: string | undefined;
            input?: {
                id: string;
                name?: string | undefined;
                type: string;
                value?: string | undefined;
                placeholder?: string | undefined;
                help?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
                size?: string | undefined;
                pattern?: string | undefined;
                readOnly?: boolean | undefined;
                required?: boolean | undefined;
                disabled?: boolean | undefined;
                autocomplete?: string | undefined;
                autofocus?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                step?: number | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                accept?: string | undefined;
                capture?: string | undefined;
                multiple?: boolean | undefined;
                allowableValues?: string[] | undefined;
                allowableEntries?: {
                    key: string;
                    value: string;
                }[] | undefined;
                options?: string | undefined;
                ignore?: boolean | undefined;
                css?: {
                    field: string;
                    input: string;
                    label: string;
                } | undefined;
                meta?: {
                    [index: string]: string;
                } | undefined;
            } | undefined;
            format?: {
                method: string;
                options?: string | undefined;
                locale?: string | undefined;
            } | undefined;
            ref?: {
                model: string;
                selfId: string;
                refId: string;
                refLabel: string;
            } | undefined;
        }[] | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        innerTypes?: {
            name: string;
            namespace: string;
            genericArgs: string[];
        }[] | undefined;
        enumNames?: string[] | undefined;
        enumValues?: string[] | undefined;
        enumMemberValues?: string[] | undefined;
        enumDescriptions?: string[] | undefined;
        meta?: {
            [index: string]: string;
        } | undefined;
    };
    actions: string[];
    returnsVoid?: boolean | undefined;
    method: string;
    returnType: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    routes: {
        path: string;
        verbs: string;
        notes: string;
        summary: string;
    }[];
    dataModel: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    viewModel: {
        name: string;
        namespace: string;
        genericArgs: string[];
    };
    requiresAuth?: boolean | undefined;
    requiredRoles: string[];
    requiresAnyRole: string[];
    requiredPermissions: string[];
    requiresAnyPermission: string[];
    tags: string[];
    ui: {
        locodeCss: {
            form: string;
            fieldset: string;
            field: string;
        };
        explorerCss: {
            form: string;
            fieldset: string;
            field: string;
        };
        formLayout: {
            id: string;
            name?: string | undefined;
            type: string;
            value?: string | undefined;
            placeholder?: string | undefined;
            help?: string | undefined;
            label?: string | undefined;
            title?: string | undefined;
            size?: string | undefined;
            pattern?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            disabled?: boolean | undefined;
            autocomplete?: string | undefined;
            autofocus?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            step?: number | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            accept?: string | undefined;
            capture?: string | undefined;
            multiple?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableEntries?: {
                key: string;
                value: string;
            }[] | undefined;
            options?: string | undefined;
            ignore?: boolean | undefined;
            css?: {
                field: string;
                input: string;
                label: string;
            } | undefined;
            meta?: {
                [index: string]: string;
            } | undefined;
        }[];
        meta: {
            [index: string]: string;
        };
    };
}[];

/** Release all tracked Object URLs */
declare function flush(): void;

/** Set focus to the next element inside a HTML Form */
declare function focusNextElement(opt?: {
    after?: HTMLInputElement;
}): void;

declare const form: {
    panelClass(style?: FormStyle): string;
    formClass(style?: FormStyle): string;
    headingClass(style?: FormStyle): string;
    subHeadingClass(style?: FormStyle): string;
    buttonsClass: string;
    legendClass: string;
};

/** Format file size in human readable bytes */
declare function formatBytes(bytes: number, d?: number): string;

/** Format as Date */
declare function formatDate(d: Date | string | number, attrs?: any): string;

declare interface FormatInfo {
    method: string;
    options?: string;
    locale?: string;
}

/** Format as Number */
declare function formatNumber(n: number, attrs?: any): string;

/** Available format methods to use in <PreviewFormat /> */
declare class Formats {
    static currency: FormatInfo;
    static bytes: FormatInfo;
    static link: FormatInfo;
    static linkTel: FormatInfo;
    static linkMailTo: FormatInfo;
    static icon: FormatInfo;
    static iconRounded: FormatInfo;
    static attachment: FormatInfo;
    static time: FormatInfo;
    static relativeTime: FormatInfo;
    static relativeTimeFromMs: FormatInfo;
    static date: FormatInfo;
    static number: FormatInfo;
    static hidden: FormatInfo;
    static enumFlags: FormatInfo;
}

declare function formatter(format: FormatInfo): Function | null;

/** Format any value or object graph */
declare function formatValue(value: any, format?: FormatInfo | null, attrs?: any): any;

declare type FormStyle = "slideOver" | "card";

/** Convert HTML Input values to supported DTO values */
declare function formValues(form: HTMLFormElement, props?: MetadataPropertyType[]): {
    [k: string]: any;
};

declare function fromCache(key: string): any;

/** Resolve File extension from file name or path */
declare function getExt(path?: string | null): string | null;

/** Resolve file name from /file/path */
declare function getFileName(path?: string | null): string | null;

declare function getFormatters(): {
    [k: string]: Function;
};

/** Resolve Primary Key value from {MetadataType} and row instance  */
declare function getId(type: MetadataType, row: any): any;

/** Get get AppMetadata instance */
declare function getMetadata(opt?: {
    assert?: boolean;
}): any;

/** Resolve the MIME type for a file path name or extension */
declare function getMimeType(fileNameOrExt: string): string;

/** Resolve PrimaryKey {MetadataPropertyType} for {MetadataType} */
declare function getPrimaryKey(type?: MetadataType | null): MetadataPropertyType | null;

declare function getPrimaryKeyByProps(type: MetadataType, props: MetadataPropertyType[]): MetadataPropertyType | null;

/** Resolve Request DTO name from a Request DTO instance */
declare function getTypeName(type?: string | InstanceType<any> | Function): string | null;

declare const grid: {
    getGridClass(style?: TableStyleOptions): string;
    getGrid2Class(style?: TableStyleOptions): string;
    getGrid3Class(style?: TableStyleOptions): string;
    getGrid4Class(style?: TableStyleOptions): string;
    getTableClass(style?: TableStyleOptions): string;
    getTheadClass(style?: TableStyleOptions): string;
    getTheadRowClass(style?: TableStyleOptions): string;
    getTheadCellClass(style?: TableStyleOptions): string;
    getTbodyClass(style?: TableStyleOptions): string;
    getTableRowClass(style: TableStyleOptions | undefined, i: number, selected: boolean, allowSelection: boolean): string;
    gridClass: string;
    grid2Class: string;
    grid3Class: string;
    grid4Class: string;
    tableClass: string;
    theadClass: string;
    tableCellClass: string;
    theadRowClass: string;
    theadCellClass: string;
    toolbarButtonClass: string;
};

declare type GridAllowOptions = "filtering" | "queryString" | "queryFilters";

declare type GridShowOptions = "toolbar" | "preferences" | "pagingNav" | "pagingInfo" | "downloadCsv" | "refresh" | "copyApiUrl" | "resetPreferences" | "filtersView" | "newItem";

/** Check if the Authenticated User has a specific permission */
declare function hasPermission(permission: string): boolean;

/** Check if the Authenticated User has a specific role */
declare function hasRole(role: string): boolean;

/** Format as empty string */
declare function hidden(o: any): string;

/** Convert object dictionary into encoded HTML attributes */
declare function htmlAttrs(attrs: any): string;

/** HTML Tag builder */
declare function htmlTag(tag: string, child?: string, attrs?: any): string;

/** Format Image URL as an Icon */
declare function icon(url: string, attrs?: any): string;

/** Resolve the fallback URL for a broken Image URL */
declare function iconFallbackSrc(src: string, fallbackSrc?: string): string | null;

/** Error handler for broken images to return a fallbackSrc */
declare function iconOnError(img: HTMLImageElement, fallbackSrc?: string): void;

/** Format Image URL as a full rounded Icon */
declare function iconRounded(url: string, attrs?: any): string;

declare interface ImageInfo {
    svg?: string;
    uri?: string;
    alt?: string;
    cls?: string;
}

/** Only indent json */
declare function indentJson(o: any, space?: number): string;

declare const input: {
    base: string;
    invalid: string;
    valid: string;
};

/** Resolve file metadata for all uploaded HTML file input files */
declare function inputFiles(input: HTMLInputElement): {
    fileName: string;
    contentLength: number;
    filePath: string | null;
}[] | null;

declare interface InputInfo {
    id: string;
    name?: string;
    type: string;
    value?: string;
    placeholder?: string;
    help?: string;
    label?: string;
    title?: string;
    size?: string;
    pattern?: string;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: string;
    autofocus?: string;
    min?: string;
    max?: string;
    step?: number;
    minLength?: number;
    maxLength?: number;
    accept?: string;
    capture?: string;
    multiple?: boolean;
    allowableValues?: string[];
    allowableEntries?: KeyValuePair<string, string>[];
    options?: string;
    ignore?: boolean;
    css?: FieldCss;
    meta?: {
        [index: string]: string;
    };
}

declare interface InputProp extends InputInfo {
    prop?: MetadataPropertyType;
    op?: MetadataOperationType;
}

/** Return error message if Authenticated User cannot access API */
declare function invalidAccessMessage(op: MetadataOperationType): string | null;

declare interface IResponseError {
    errorCode?: string;
    fieldName?: string;
    message?: string;
}

declare interface IResponseStatus extends IResponseError {
    errors?: ResponseError[];
}

declare interface IReturn<T> {
    createResponse(): T;
}

declare interface IReturnVoid {
    createResponse(): any;
}

/** Check if the Authenticated User has the Admin role */
declare function isAdmin(): boolean;

declare function isComplexProp(prop?: MetadataPropertyType): boolean;

/** Check if value is a non-scalar type */
declare function isComplexType(value: any): boolean;

/** Check if value is a scalar type */
declare function isPrimitive(value: any): boolean;

declare interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}

/** Format URL as <a> link */
declare function link(href: string, opt?: {
    cls?: string;
    target?: string;
    rel?: string;
}): string;

/** Convert HTML Anchor attributes into encoded HTML attributes */
declare function linkAttrs(attrs: {
    href: string;
    cls?: string;
    target?: string;
    rel?: string;
}): {
    target: string;
    rel: string;
    class: string;
} & {
    href: string;
    cls?: string | undefined;
    target?: string | undefined;
    rel?: string | undefined;
};

declare interface LinkInfo {
    id: string;
    href: string;
    label: string;
    icon: ImageInfo;
    show: string;
    hide: string;
}

/** Format email as <a> mailto: link */
declare function linkMailTo(email: string, opt?: {
    subject?: string;
    body?: string;
    cls?: string;
    target?: string;
    rel?: string;
}): string;

/** Format Phone Number as <a> tel: link */
declare function linkTel(tel: string, opt?: {
    cls?: string;
    target?: string;
    rel?: string;
}): string;

/** Load {AppMetadata} if needed
 * @param olderThan   - Reload metadata if age exceeds ms
 * @param resolvePath - Override `/metadata/app.json` path use to fetch metadata
 * @param resolve     - Use a custom fetch to resolve AppMetadata
 */
declare function loadMetadata(args: {
    olderThan?: number;
    resolvePath?: string;
    resolve?: () => Promise<Response>;
}): Promise<any>;

/** SSR safe wrapper around localStorage */
declare class LocalStore implements Storage {
    get length(): number;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
    key(index: number): string | null;
}

declare interface LocodeUi {
    css: ApiCss;
    tags: AppTags;
    maxFieldLength: number;
    maxNestedFields: number;
    maxNestedFieldLength: number;
}

/** Create a Request DTO instance for Request DTO name */
declare function makeDto(requestDto: string, obj?: any, ctx?: {
    createResponse?: () => any;
    method?: string;
}): any;

declare interface MediaRule {
    size: string;
    rule: string;
    applyTo: string[];
    meta: {
        [index: string]: string;
    };
}

declare interface MetaAuthProvider {
    name: string;
    label: string;
    type: string;
    navItem: NavItem;
    icon: ImageInfo;
    formLayout: InputInfo[];
    meta: {
        [index: string]: string;
    };
}

declare interface MetadataAttribute {
    name: string;
    constructorArgs: MetadataPropertyType[];
    args: MetadataPropertyType[];
}

declare interface MetadataDataContract {
    name: string;
    namespace: string;
}

declare interface MetadataDataMember {
    name: string;
    order?: number;
    isRequired?: boolean;
    emitDefaultValue?: boolean;
}

declare interface MetadataOperationType {
    request: MetadataType;
    response: MetadataType;
    actions: string[];
    returnsVoid?: boolean;
    method: string;
    returnType: MetadataTypeName;
    routes: MetadataRoute[];
    dataModel: MetadataTypeName;
    viewModel: MetadataTypeName;
    requiresAuth?: boolean;
    requiredRoles: string[];
    requiresAnyRole: string[];
    requiredPermissions: string[];
    requiresAnyPermission: string[];
    tags: string[];
    ui: ApiUiInfo;
}

declare interface MetadataPropertyType {
    name: string;
    type: string;
    namespace?: string;
    isValueType?: boolean;
    isEnum?: boolean;
    isPrimaryKey?: boolean;
    genericArgs?: string[];
    value?: string;
    description?: string;
    dataMember?: MetadataDataMember;
    readOnly?: boolean;
    paramType?: string;
    displayType?: string;
    isRequired?: boolean;
    allowableValues?: string[];
    allowableMin?: number;
    allowableMax?: number;
    attributes?: MetadataAttribute[];
    uploadTo?: string;
    input?: InputInfo;
    format?: FormatInfo;
    ref?: RefInfo;
}

declare interface MetadataRoute {
    path: string;
    verbs: string;
    notes: string;
    summary: string;
}

declare interface MetadataType {
    name: string;
    namespace?: string;
    genericArgs?: string[];
    inherits?: MetadataTypeName;
    implements?: MetadataTypeName[];
    displayType?: string;
    description?: string;
    notes?: string;
    icon?: ImageInfo;
    isNested?: boolean;
    isEnum?: boolean;
    isEnumInt?: boolean;
    isInterface?: boolean;
    isAbstract?: boolean;
    dataContract?: MetadataDataContract;
    properties?: MetadataPropertyType[];
    attributes?: MetadataAttribute[];
    innerTypes?: MetadataTypeName[];
    enumNames?: string[];
    enumValues?: string[];
    enumMemberValues?: string[];
    enumDescriptions?: string[];
    meta?: {
        [index: string]: string;
    };
}

declare interface MetadataTypeName {
    name: string;
    namespace: string;
    genericArgs: string[];
}

declare interface MetadataTypes {
    config: MetadataTypesConfig;
    namespaces: string[];
    types: MetadataType[];
    operations: MetadataOperationType[];
}

declare interface MetadataTypesConfig {
    baseUrl: string;
    usePath: string;
    makePartial: boolean;
    makeVirtual: boolean;
    makeInternal: boolean;
    baseClass: string;
    package: string;
    addReturnMarker: boolean;
    addDescriptionAsComments: boolean;
    addDataContractAttributes: boolean;
    addIndexesToDataMembers: boolean;
    addGeneratedCodeAttributes: boolean;
    addImplicitVersion?: number;
    addResponseStatus: boolean;
    addServiceStackTypes: boolean;
    addModelExtensions: boolean;
    addPropertyAccessors: boolean;
    excludeGenericBaseTypes: boolean;
    settersReturnThis: boolean;
    makePropertiesOptional: boolean;
    exportAsTypes: boolean;
    excludeImplementedInterfaces: boolean;
    addDefaultXmlNamespace: string;
    makeDataContractsExtensible: boolean;
    initializeCollections: boolean;
    addNamespaces: string[];
    defaultNamespaces: string[];
    defaultImports: string[];
    includeTypes: string[];
    excludeTypes: string[];
    exportTags: string[];
    treatTypesAsStrings: string[];
    exportValueTypes: boolean;
    globalNamespace: string;
    excludeNamespace: boolean;
    dataClass: string;
    dataClassJson: string;
    ignoreTypes: string[];
    exportTypes: string[];
    exportAttributes: string[];
    ignoreTypesInNamespaces: string[];
}

declare const modal: {
    modalClass: string;
    sizeClass: string;
};

declare interface NavItem {
    label: string;
    href: string;
    exact?: boolean;
    id: string;
    className: string;
    iconClass: string;
    iconSrc: string;
    show: string;
    hide: string;
    children: NavItem[];
    meta: {
        [index: string]: string;
    };
}

/** Create and track Image URL for an uploaded file */
declare function objectUrl(file: Blob | MediaSource): string;

declare interface PluginInfo {
    loaded: string[];
    auth: AuthInfo;
    autoQuery: AutoQueryInfo;
    validation: ValidationInfo;
    sharpPages: SharpPagesInfo;
    requestLogs: RequestLogsInfo;
    profiling: ProfilingInfo;
    filesUpload: FilesUploadInfo;
    adminUsers: AdminUsersInfo;
    adminRedis: AdminRedisInfo;
    adminDatabase: AdminDatabaseInfo;
    meta: {
        [index: string]: string;
    };
}

/** Prettify & scrub an API JSON Response for human readability */
declare function prettyJson(o: any): string;

declare interface ProfilingInfo {
    accessRole: string;
    defaultLimit: number;
    summaryFields: string[];
    tagLabel: string;
    meta: {
        [index: string]: string;
    };
}

/** Resolve {MetadataPropertyType} by Type and Property name */
declare function property(typeName: string, name: string): {
    name: string;
    type: string;
    namespace?: string | undefined;
    isValueType?: boolean | undefined;
    isEnum?: boolean | undefined;
    isPrimaryKey?: boolean | undefined;
    genericArgs?: string[] | undefined;
    value?: string | undefined;
    description?: string | undefined;
    dataMember?: {
        name: string;
        order?: number | undefined;
        isRequired?: boolean | undefined;
        emitDefaultValue?: boolean | undefined;
    } | undefined;
    readOnly?: boolean | undefined;
    paramType?: string | undefined;
    displayType?: string | undefined;
    isRequired?: boolean | undefined;
    allowableValues?: string[] | undefined;
    allowableMin?: number | undefined;
    allowableMax?: number | undefined;
    attributes?: {
        name: string;
        constructorArgs: any[];
        args: any[];
    }[] | undefined;
    uploadTo?: string | undefined;
    input?: {
        id: string;
        name?: string | undefined;
        type: string;
        value?: string | undefined;
        placeholder?: string | undefined;
        help?: string | undefined;
        label?: string | undefined;
        title?: string | undefined;
        size?: string | undefined;
        pattern?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        autocomplete?: string | undefined;
        autofocus?: string | undefined;
        min?: string | undefined;
        max?: string | undefined;
        step?: number | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        accept?: string | undefined;
        capture?: string | undefined;
        multiple?: boolean | undefined;
        allowableValues?: string[] | undefined;
        allowableEntries?: {
            key: string;
            value: string;
        }[] | undefined;
        options?: string | undefined;
        ignore?: boolean | undefined;
        css?: {
            field: string;
            input: string;
            label: string;
        } | undefined;
        meta?: {
            [index: string]: string;
        } | undefined;
    } | undefined;
    format?: {
        method: string;
        options?: string | undefined;
        locale?: string | undefined;
    } | undefined;
    ref?: {
        model: string;
        selfId: string;
        refId: string;
        refLabel: string;
    } | undefined;
} | null | undefined;

/** Resolve allowable entries for property by {MetadataPropertyType} */
declare function propertyOptions(prop: MetadataPropertyType): {
    [name: string]: string;
} | null;

declare function pushState(args: Record<string, any>): void;

declare interface RedisEndpointInfo {
    host: string;
    port: number;
    ssl?: boolean;
    db: number;
    username: string;
    password: string;
}

declare interface RefInfo {
    model: string;
    selfId: string;
    refId: string;
    refLabel: string;
}

/** Format Date as Relative Time from now */
declare function relativeTime(val: string | Date | number, rtf?: Intl.RelativeTimeFormat): string | undefined;

/** Format difference between dates as Relative Time */
declare function relativeTimeFromDate(d: Date, from?: Date): string | undefined;

/** Format time in ms as Relative Time from now */
declare function relativeTimeFromMs(elapsedMs: number, rtf?: Intl.RelativeTimeFormat): string | undefined;

declare interface RequestLogsInfo {
    accessRole: string;
    requiredRoles: string[];
    requestLogger: string;
    defaultLimit: number;
    serviceRoutes: {
        [index: string]: string[];
    };
    meta: {
        [index: string]: string;
    };
}

declare interface ResponseError {
    errorCode?: string;
    fieldName?: string;
    message?: string;
    meta?: {
        [index: string]: string;
    };
}

declare interface ResponseStatus {
    errorCode?: string;
    message?: string;
    stackTrace?: string;
    errors?: ResponseError[];
    meta?: {
        [index: string]: string;
    };
}

declare interface SchemaInfo {
    alias: string;
    name: string;
    tables: string[];
}

declare function scopedExpr(src: string, ctx: Record<string, any>): any;

declare interface ScriptMethodType {
    name: string;
    paramNames: string[];
    paramTypes: string[];
    returnType: string;
}

/** Traverse object and replace API values with readable formatted values */
declare function scrub(o: any): any;

declare function setAutoQueryGridDefaults(config: AutoQueryGridDefaults): void;

/** Set global configuration */
declare function setConfig(config: UiConfig): void;

/** Set default locale, number and Date formats */
declare function setDefaultFormats(newFormat: DefaultFormats): void;

/** Register additional formatters for use in <PreviewFormat /> */
declare function setFormatters(formatters: {
    [name: string]: Function;
}): void;

/** Explicitly set AppMetadata and save to localStorage */
declare function setMetadata(metadata: AppMetadata | null | undefined): boolean;

/** Double set reactive Ref<T> to force triggering updates */
declare function setRef($ref: Ref<any>, value: any): void;

declare interface SharpPagesInfo {
    apiPath: string;
    scriptAdminRole: string;
    metadataDebugAdminRole: string;
    metadataDebug?: boolean;
    spaFallback?: boolean;
    meta: {
        [index: string]: string;
    };
}

/** Sign In the currently Authenticated User */
declare function signIn(user: AuthenticateResponse): void;

/** Sign Out currently Authenticated User */
declare function signOut(): void;

declare const slideOver: {
    panelClass: string;
    formClass: string;
    titlebarClass: string;
    headingClass: string;
    subHeadingClass: string;
    closeButtonClass: string;
};

/** Check if a supported HTML Input exists for {MetadataPropertyType} */
declare function supportsProp(prop?: MetadataPropertyType): boolean;

/** Convert SVG XML to data:image URL */
declare function svgToDataUri(svg: string): string;

declare function swrApi<TResponse>(client: JsonServiceClient, request: IReturn<TResponse> | ApiRequest, fn: (r: ApiResult<TResponse>) => void, args?: any, method?: string): Promise<ApiResult<any>>;

declare function swrCacheKey<TResponse>(request: IReturn<TResponse> | ApiRequest, args?: any): string;

declare function swrClear<TResponse>(options: {
    request: IReturn<TResponse> | ApiRequest;
    args?: any;
}): void;

declare type TableStyle = "simple" | "fullWidth" | "stripedRows" | "whiteBackground" | "uppercaseHeadings" | "verticalLines";

declare type TableStyleOptions = TableStyle | TableStyle[] | string;

declare interface ThemeInfo {
    form: string;
    modelIcon: ImageInfo;
}

/** Format duration in time format */
declare function time(o: any, attrs?: any): string;

/** Format TimeSpan or Date into required input[type=time] format */
declare function timeInputFormat(s?: string | number | Date | null): string;

/** Resolve Absolute URL from relative path */
declare function toAppUrl(url: string): string | undefined;

/** Convert Request DTO values to supported HTML Input values */
declare function toFormValues(dto: any, metaType?: MetadataType | null): any;

/** Update reactive `transition` class based on Tailwind animation transition rule-set */
declare function transition(rule: TransitionRules, transition: Ref<string>, show: boolean): void;

declare type TransitionRule = {
    cls: string;
    from: string;
    to: string;
};

declare type TransitionRules = {
    entering: TransitionRule;
    leaving: TransitionRule;
};

/** Truncate text that exceeds maxLength with an ellipsis */
declare function truncate(str: string, maxLength: number): string;

/** Metadata Types refer to same type */
declare function typeEquals(a?: MetadataType | MetadataTypeName | null, b?: MetadataType | MetadataTypeName | null): boolean | null | undefined;

declare function typeName(metaType?: MetadataTypeName): string | undefined;

/** @param {string} name
 * @param {string[]} genericArgs
 * @return {string}
 */
declare function typeName2(name: string, genericArgs?: string[]): string;

/**
 * Resolve {MetadataType} for DTO name
 * @param name        - Find MetadataType by name
 * @param [namespace] - Find MetadataType by name and namespace
 */
declare function typeOf(name?: string | null, namespace?: string | null): {
    name: string;
    namespace?: string | undefined;
    genericArgs?: string[] | undefined;
    inherits?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    } | undefined;
    implements?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    }[] | undefined;
    displayType?: string | undefined;
    description?: string | undefined;
    notes?: string | undefined;
    icon?: {
        svg?: string | undefined;
        uri?: string | undefined;
        alt?: string | undefined;
        cls?: string | undefined;
    } | undefined;
    isNested?: boolean | undefined;
    isEnum?: boolean | undefined;
    isEnumInt?: boolean | undefined;
    isInterface?: boolean | undefined;
    isAbstract?: boolean | undefined;
    dataContract?: {
        name: string;
        namespace: string;
    } | undefined;
    properties?: {
        name: string;
        type: string;
        namespace?: string | undefined;
        isValueType?: boolean | undefined;
        isEnum?: boolean | undefined;
        isPrimaryKey?: boolean | undefined;
        genericArgs?: string[] | undefined;
        value?: string | undefined;
        description?: string | undefined;
        dataMember?: {
            name: string;
            order?: number | undefined;
            isRequired?: boolean | undefined;
            emitDefaultValue?: boolean | undefined;
        } | undefined;
        readOnly?: boolean | undefined;
        paramType?: string | undefined;
        displayType?: string | undefined;
        isRequired?: boolean | undefined;
        allowableValues?: string[] | undefined;
        allowableMin?: number | undefined;
        allowableMax?: number | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        uploadTo?: string | undefined;
        input?: {
            id: string;
            name?: string | undefined;
            type: string;
            value?: string | undefined;
            placeholder?: string | undefined;
            help?: string | undefined;
            label?: string | undefined;
            title?: string | undefined;
            size?: string | undefined;
            pattern?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            disabled?: boolean | undefined;
            autocomplete?: string | undefined;
            autofocus?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            step?: number | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            accept?: string | undefined;
            capture?: string | undefined;
            multiple?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableEntries?: {
                key: string;
                value: string;
            }[] | undefined;
            options?: string | undefined;
            ignore?: boolean | undefined;
            css?: {
                field: string;
                input: string;
                label: string;
            } | undefined;
            meta?: {
                [index: string]: string;
            } | undefined;
        } | undefined;
        format?: {
            method: string;
            options?: string | undefined;
            locale?: string | undefined;
        } | undefined;
        ref?: {
            model: string;
            selfId: string;
            refId: string;
            refLabel: string;
        } | undefined;
    }[] | undefined;
    attributes?: {
        name: string;
        constructorArgs: any[];
        args: any[];
    }[] | undefined;
    innerTypes?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    }[] | undefined;
    enumNames?: string[] | undefined;
    enumValues?: string[] | undefined;
    enumMemberValues?: string[] | undefined;
    enumDescriptions?: string[] | undefined;
    meta?: {
        [index: string]: string;
    } | undefined;
} | null;

/** Resolve {MetadataType} by {MetadataTypeName} */
declare function typeOfRef(ref?: {
    name: string;
    namespace?: string;
}): {
    name: string;
    namespace?: string | undefined;
    genericArgs?: string[] | undefined;
    inherits?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    } | undefined;
    implements?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    }[] | undefined;
    displayType?: string | undefined;
    description?: string | undefined;
    notes?: string | undefined;
    icon?: {
        svg?: string | undefined;
        uri?: string | undefined;
        alt?: string | undefined;
        cls?: string | undefined;
    } | undefined;
    isNested?: boolean | undefined;
    isEnum?: boolean | undefined;
    isEnumInt?: boolean | undefined;
    isInterface?: boolean | undefined;
    isAbstract?: boolean | undefined;
    dataContract?: {
        name: string;
        namespace: string;
    } | undefined;
    properties?: {
        name: string;
        type: string;
        namespace?: string | undefined;
        isValueType?: boolean | undefined;
        isEnum?: boolean | undefined;
        isPrimaryKey?: boolean | undefined;
        genericArgs?: string[] | undefined;
        value?: string | undefined;
        description?: string | undefined;
        dataMember?: {
            name: string;
            order?: number | undefined;
            isRequired?: boolean | undefined;
            emitDefaultValue?: boolean | undefined;
        } | undefined;
        readOnly?: boolean | undefined;
        paramType?: string | undefined;
        displayType?: string | undefined;
        isRequired?: boolean | undefined;
        allowableValues?: string[] | undefined;
        allowableMin?: number | undefined;
        allowableMax?: number | undefined;
        attributes?: {
            name: string;
            constructorArgs: any[];
            args: any[];
        }[] | undefined;
        uploadTo?: string | undefined;
        input?: {
            id: string;
            name?: string | undefined;
            type: string;
            value?: string | undefined;
            placeholder?: string | undefined;
            help?: string | undefined;
            label?: string | undefined;
            title?: string | undefined;
            size?: string | undefined;
            pattern?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            disabled?: boolean | undefined;
            autocomplete?: string | undefined;
            autofocus?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            step?: number | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            accept?: string | undefined;
            capture?: string | undefined;
            multiple?: boolean | undefined;
            allowableValues?: string[] | undefined;
            allowableEntries?: {
                key: string;
                value: string;
            }[] | undefined;
            options?: string | undefined;
            ignore?: boolean | undefined;
            css?: {
                field: string;
                input: string;
                label: string;
            } | undefined;
            meta?: {
                [index: string]: string;
            } | undefined;
        } | undefined;
        format?: {
            method: string;
            options?: string | undefined;
            locale?: string | undefined;
        } | undefined;
        ref?: {
            model: string;
            selfId: string;
            refId: string;
            refLabel: string;
        } | undefined;
    }[] | undefined;
    attributes?: {
        name: string;
        constructorArgs: any[];
        args: any[];
    }[] | undefined;
    innerTypes?: {
        name: string;
        namespace: string;
        genericArgs: string[];
    }[] | undefined;
    enumNames?: string[] | undefined;
    enumValues?: string[] | undefined;
    enumMemberValues?: string[] | undefined;
    enumDescriptions?: string[] | undefined;
    meta?: {
        [index: string]: string;
    } | undefined;
} | null;

/** Return all properties (inc. inherited) for {MetadataType} */
declare function typeProperties(type?: MetadataType | null): MetadataPropertyType[];

declare interface UiConfig {
    redirectSignIn?: string;
    redirectSignOut?: string;
    navigate?: (url: string) => void;
    assetsPathResolver?: (src: string) => string;
    fallbackPathResolver?: (src: string) => string;
    autoQueryGridDefaults?: AutoQueryGridDefaults;
    storage?: Storage;
    tableIcon?: ImageInfo;
    scopeWhitelist?: {
        [k: string]: Function;
    };
}

declare interface UiInfo {
    brandIcon: ImageInfo;
    hideTags: string[];
    modules: string[];
    alwaysHideTags: string[];
    adminLinks: LinkInfo[];
    theme: ThemeInfo;
    locode: LocodeUi;
    explorer: ExplorerUi;
    admin: AdminUi;
    defaultFormats: ApiFormat;
    meta: {
        [index: string]: string;
    };
}

/** Returns a dto with all Refs unwrapped */
declare function unRefs(o: any): any;

export declare function useAuth(): {
    signIn: typeof signIn;
    signOut: typeof signOut;
    user: ComputedRef<{
        userId?: string | undefined;
        sessionId?: string | undefined;
        userName?: string | undefined;
        displayName?: string | undefined;
        referrerUrl?: string | undefined;
        bearerToken?: string | undefined;
        refreshToken?: string | undefined;
        profileUrl?: string | undefined;
        roles?: string[] | undefined;
        permissions?: string[] | undefined;
    } | null>;
    isAuthenticated: ComputedRef<boolean>;
    hasRole: typeof hasRole;
    hasPermission: typeof hasPermission;
    isAdmin: typeof isAdmin;
    canAccess: typeof canAccess;
    invalidAccessMessage: typeof invalidAccessMessage;
};

export declare function useClient(): ApiState;

/** Manage Global Configuration for Component Library */
export declare function useConfig(): {
    config: ComputedRef<UiConfig>;
    setConfig: typeof setConfig;
    events: {
        subscribe: (type: string, callback: Function) => {
            unsubscribe: () => void;
        };
        publish: (eventType: string, arg: any) => void;
    };
    autoQueryGridDefaults: ComputedRef<AutoQueryGridDefaults>;
    setAutoQueryGridDefaults: typeof setAutoQueryGridDefaults;
    assetsPathResolver: typeof assetsPathResolver;
    fallbackPathResolver: typeof fallbackPathResolver;
};

export declare function useFiles(): {
    extSvg: typeof extSvg;
    extSrc: typeof extSrc;
    getExt: typeof getExt;
    encodeSvg: typeof encodeSvg;
    canPreview: typeof canPreview;
    getFileName: typeof getFileName;
    getMimeType: typeof getMimeType;
    formatBytes: typeof formatBytes;
    filePathUri: typeof filePathUri;
    svgToDataUri: typeof svgToDataUri;
    fileImageUri: typeof fileImageUri;
    objectUrl: typeof objectUrl;
    flush: typeof flush;
    inputFiles: typeof inputFiles;
    iconOnError: typeof iconOnError;
    iconFallbackSrc: typeof iconFallbackSrc;
};

export declare function useFormatters(): {
    Formats: typeof Formats;
    setDefaultFormats: typeof setDefaultFormats;
    getFormatters: typeof getFormatters;
    setFormatters: typeof setFormatters;
    formatValue: typeof formatValue;
    formatter: typeof formatter;
    dateInputFormat: typeof dateInputFormat;
    currency: typeof currency;
    bytes: typeof bytes;
    link: typeof link;
    linkTel: typeof linkTel;
    linkMailTo: typeof linkMailTo;
    icon: typeof icon;
    iconRounded: typeof iconRounded;
    attachment: typeof attachment;
    hidden: typeof hidden;
    time: typeof time;
    relativeTime: typeof relativeTime;
    relativeTimeFromDate: typeof relativeTimeFromDate;
    relativeTimeFromMs: typeof relativeTimeFromMs;
    enumFlags: typeof enumFlags;
    formatDate: typeof formatDate;
    formatNumber: typeof formatNumber;
    indentJson: typeof indentJson;
    prettyJson: typeof prettyJson;
    scrub: typeof scrub;
    truncate: typeof truncate;
    apiValueFmt: typeof apiValueFmt;
    iconOnError: typeof iconOnError;
};

export declare function useMetadata(): {
    loadMetadata: typeof loadMetadata;
    getMetadata: typeof getMetadata;
    setMetadata: typeof setMetadata;
    clearMetadata: typeof clearMetadata;
    metadataApp: ComputedRef<AppInfo | null>;
    metadataApi: ComputedRef<MetadataTypes | null>;
    filterDefinitions: ComputedRef<AutoQueryConvention[]>;
    typeOf: typeof typeOf;
    typeOfRef: typeof typeOfRef;
    typeEquals: typeof typeEquals;
    apiOf: typeof apiOf;
    findApis: typeof findApis;
    typeName: typeof typeName;
    typeName2: typeof typeName2;
    property: typeof property;
    enumOptions: typeof enumOptions;
    propertyOptions: typeof propertyOptions;
    createFormLayout: typeof createFormLayout;
    typeProperties: typeof typeProperties;
    supportsProp: typeof supportsProp;
    Crud: {
        Create: string;
        Update: string;
        Patch: string;
        Delete: string;
        AnyRead: string[];
        AnyWrite: string[];
        isAnyQuery: (op: MetadataOperationType) => any;
        isQuery: (op: MetadataOperationType) => any;
        isQueryInto: (op: MetadataOperationType) => any;
        isCrud: (op: MetadataOperationType) => boolean | undefined;
        isCreate: (op: MetadataOperationType) => boolean;
        isUpdate: (op: MetadataOperationType) => boolean;
        isPatch: (op: MetadataOperationType) => boolean;
        isDelete: (op: MetadataOperationType) => boolean;
        model: (type?: MetadataType | null | undefined) => string | null | undefined;
    };
    Apis: typeof Apis;
    getPrimaryKey: typeof getPrimaryKey;
    getPrimaryKeyByProps: typeof getPrimaryKeyByProps;
    getId: typeof getId;
    createDto: typeof createDto;
    makeDto: typeof makeDto;
    toFormValues: typeof toFormValues;
    formValues: typeof formValues;
    isComplexProp: typeof isComplexProp;
    asKvps: typeof asKvps;
    expandEnumFlags: typeof expandEnumFlags;
    enumFlagsConverter: typeof enumFlagsConverter;
};

export declare function useUtils(): {
    LocalStore: typeof LocalStore;
    dateInputFormat: typeof dateInputFormat;
    timeInputFormat: typeof timeInputFormat;
    setRef: typeof setRef;
    unRefs: typeof unRefs;
    transition: typeof transition;
    focusNextElement: typeof focusNextElement;
    getTypeName: typeof getTypeName;
    htmlTag: typeof htmlTag;
    htmlAttrs: typeof htmlAttrs;
    linkAttrs: typeof linkAttrs;
    toAppUrl: typeof toAppUrl;
    isPrimitive: typeof isPrimitive;
    isComplexType: typeof isComplexType;
    pushState: typeof pushState;
    scopedExpr: typeof scopedExpr;
    copyText: typeof copyText;
    fromCache: typeof fromCache;
    swrCacheKey: typeof swrCacheKey;
    swrClear: typeof swrClear;
    swrApi: typeof swrApi;
    asStrings: typeof asStrings;
    asOptions: typeof asOptions;
    createDebounce: typeof createDebounce;
};

declare interface ValidationInfo {
    hasValidationSource?: boolean;
    hasValidationSourceAdmin?: boolean;
    serviceRoutes: {
        [index: string]: string[];
    };
    typeValidators: ScriptMethodType[];
    propertyValidators: ScriptMethodType[];
    accessRole: string;
    meta: {
        [index: string]: string;
    };
}

export { }
