const dataUri = (data: string, mime: string): string => `data:${mime};utf8,${encodeURIComponent(data)}`;

export default dataUri;
